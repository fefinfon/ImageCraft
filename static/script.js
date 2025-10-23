document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const imageLoader = document.getElementById('image-loader');
    const fileNameSpan = document.getElementById('file-name');
    const adjustmentsDiv = document.getElementById('adjustments');
    const processBtn = document.getElementById('process-btn');
    const statusBar = document.getElementById('status-bar');
    const paletteContainer = document.getElementById('palette-container');
    const loader = document.getElementById('loader');
    const autoProcessCheck = document.getElementById('auto-process');

    const originalCanvas = document.getElementById('original-canvas');
    const originalCtx = originalCanvas.getContext('2d');
    const processedCanvas = document.getElementById('processed-canvas');
    const processedCtx = processedCanvas.getContext('2d');

    let originalImageFile = null;
    let debounceTimer;

    // --- LÓGICA DE PROCESAMIENTO ---
    
    // Al cargar una imagen, la mostramos en el canvas original
    imageLoader.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            originalImageFile = file;
            fileNameSpan.textContent = file.name;
            adjustmentsDiv.classList.remove('hidden');
            processBtn.disabled = false;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    drawImageToCanvas(originalCanvas, originalCtx, img);
                    updateStatus('Image loaded. Adjust settings and process.');
                    // Si auto-generate está activo, procesamos inmediatamente
                    if (autoProcessCheck.checked) {
                        processImage();
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Función principal para procesar la imagen
    const processImage = async () => {
        if (!originalImageFile) {
            updateStatus('Please select an image first.', true);
            return;
        }

        loader.classList.remove('hidden');
        processBtn.disabled = true;
        updateStatus('Processing...');

        const formData = new FormData();
        formData.append('image', originalImageFile);
        
        document.querySelectorAll('#adjustments input').forEach(input => {
            if (input.type === 'checkbox') {
                formData.append(input.id.replace(/-/g, '_'), input.checked);
            } else if (input.type === 'range') {
                formData.append(input.id.replace(/-/g, '_'), input.value);
            }
        });
        
        try {
            const response = await fetch('/process-image', { method: 'POST', body: formData });
            if (!response.ok) throw new Error((await response.json()).error || 'Server error');
            
            const data = await response.json();
            
            const resultImage = new Image();
            resultImage.onload = () => {
                drawImageToCanvas(processedCanvas, processedCtx, resultImage);
            };
            resultImage.src = 'data:image/png;base64,' + data.image;

            displayPalette(data.palette);
            updateStatus(data.message);

        } catch (error) {
            updateStatus(`Error: ${error.message}`, true);
        } finally {
            loader.classList.add('hidden');
            processBtn.disabled = false;
        }
    };
    
    // El botón de generar simplemente llama a la función principal
    processBtn.addEventListener('click', processImage);

    // --- LÓGICA DE AUTO-PROCESADO ---
    document.querySelectorAll('.auto-trigger').forEach(control => {
        control.addEventListener('input', () => {
            if (autoProcessCheck.checked) {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    processImage();
                }, 500); // Espera 500ms después de que el usuario deja de mover el slider
            }
        });
    });

    // --- LÓGICA DE HERRAMIENTAS DE EDICIÓN (EJEMPLO CON LÁPIZ) ---
    const toolbar = document.getElementById('toolbar');
    let activeTool = 'pencil';
    let isDrawing = false;
    let activeColor = '#000000'; // Color por defecto

    toolbar.addEventListener('click', (e) => {
        if (e.target.classList.contains('tool-btn')) {
            toolbar.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            activeTool = e.target.dataset.tool;
        }
    });

    paletteContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('color-swatch')) {
            activeColor = e.target.style.backgroundColor;
            updateStatus(`Active color set to ${activeColor}`);
        }
    });

    const getMousePos = (canvas, evt) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (evt.clientX - rect.left) * scaleX,
            y: (evt.clientY - rect.top) * scaleY
        };
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const pos = getMousePos(processedCanvas, e);
        
        // La magia de la edición ocurre aquí
        if (activeTool === 'pencil') {
            processedCtx.fillStyle = activeColor;
            processedCtx.fillRect(Math.floor(pos.x), Math.floor(pos.y), 1, 1);
        } else if (activeTool === 'eraser') {
            // Para el borrador, "borramos" el pixel.
            processedCtx.clearRect(Math.floor(pos.x), Math.floor(pos.y), 1, 1);
        } else if (activeTool === 'eyedropper') {
             const pixelData = processedCtx.getImageData(Math.floor(pos.x), Math.floor(pos.y), 1, 1).data;
             activeColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
             updateStatus(`Color picked: ${activeColor}`);
             // Opcional: volver al lápiz después de seleccionar color
             // toolbar.querySelector('[data-tool="pencil"]').click();
        }
    };

    processedCanvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        draw(e);
    });
    processedCanvas.addEventListener('mousemove', draw);
    processedCanvas.addEventListener('mouseup', () => isDrawing = false);
    processedCanvas.addEventListener('mouseout', () => isDrawing = false);
    processedCanvas.addEventListener('click', (e) => {
        if (activeTool === 'eyedropper') draw(e); // El cuentagotas funciona con un solo clic
    });

    // --- FUNCIONES DE AYUDA ---

    function drawImageToCanvas(canvas, ctx, img) {
        const container = canvas.parentElement;
        const contW = container.clientWidth;
        const contH = container.clientHeight;
        const imgRatio = img.width / img.height;
        const contRatio = contW / contH;
        let drawW, drawH;

        if (imgRatio > contRatio) {
            drawW = contW;
            drawH = contW / imgRatio;
        } else {
            drawH = contH;
            drawW = contH * imgRatio;
        }
        
        // Para pixel art, es crucial deshabilitar el suavizado de imagen
        ctx.imageSmoothingEnabled = false;
        
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.style.width = `${drawW}px`;
        canvas.style.height = `${drawH}px`;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    }
    
    function displayPalette(palette) {
        paletteContainer.innerHTML = '';
        if (!palette || palette.length === 0) {
            paletteContainer.textContent = 'No colors generated.';
            return;
        }
        palette.forEach(colorHex => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = colorHex;
            swatch.title = colorHex;
            paletteContainer.appendChild(swatch);
        });
    }

    function updateStatus(message, isError = false) {
        statusBar.textContent = message;
        statusBar.style.color = isError ? 'red' : 'black';
    }
});