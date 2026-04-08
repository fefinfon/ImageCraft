// --- PALETA DE COLORES (DMC) ---
const DMC_PALETTE = [
    {"code": "DMC-1", "name": "DMC 159,56,69", "r": 159, "g": 56, "b": 69},
    {"code": "DMC-2", "name": "DMC 242,188,197", "r": 242, "g": 188, "b": 197},
    {"code": "DMC-3", "name": "DMC 207,162,150", "r": 207, "g": 162, "b": 150},
    {"code": "DMC-4", "name": "DMC 222,188,217", "r": 222, "g": 188, "b": 217},
    {"code": "DMC-5", "name": "DMC 77,46,61", "r": 77, "g": 46, "b": 61},
    {"code": "DMC-6", "name": "DMC 144,139,195", "r": 144, "g": 139, "b": 195},
    {"code": "DMC-7", "name": "DMC 139,154,197", "r": 139, "g": 154, "b": 197},
    {"code": "DMC-8", "name": "DMC 171,194,222", "r": 171, "g": 194, "b": 222},
    {"code": "DMC-9", "name": "DMC 70,80,130", "r": 70, "g": 80, "b": 130},
    {"code": "DMC-10", "name": "DMC 167,180,205", "r": 167, "g": 180, "b": 205},
    {"code": "DMC-11", "name": "DMC 130,144,174", "r": 130, "g": 144, "b": 174},
    {"code": "DMC-12", "name": "DMC 102,117,148", "r": 102, "g": 117, "b": 148},
    {"code": "DMC-13", "name": "DMC 189,219,230", "r": 189, "g": 219, "b": 230},
    {"code": "DMC-14", "name": "DMC 86,149,113", "r": 86, "g": 149, "b": 113},
    {"code": "DMC-15", "name": "DMC 159,204,141", "r": 159, "g": 204, "b": 141},
    {"code": "DMC-16", "name": "DMC 218,216,120", "r": 218, "g": 216, "b": 120},
    {"code": "DMC-17", "name": "DMC 191,187,32", "r": 191, "g": 187, "b": 32},
    {"code": "DMC-18", "name": "DMC 159,132,71", "r": 159, "g": 132, "b": 71},
    {"code": "DMC-19", "name": "DMC 180,195,193", "r": 180, "g": 195, "b": 193},
    {"code": "DMC-20", "name": "DMC 139,154,148", "r": 139, "g": 154, "b": 148},
    {"code": "DMC-21", "name": "DMC 152,112,172", "r": 152, "g": 112, "b": 172},
    {"code": "DMC-22", "name": "DMC 182,147,195", "r": 182, "g": 147, "b": 195},
    {"code": "DMC-23", "name": "DMC 201,175,221", "r": 201, "g": 175, "b": 221},
    {"code": "DMC-24", "name": "DMC 212,195,228", "r": 212, "g": 195, "b": 228},
    {"code": "DMC-25", "name": "DMC 136,66,56", "r": 136, "g": 66, "b": 56},
    {"code": "DMC-26", "name": "DMC 187,129,123", "r": 187, "g": 129, "b": 123},
    {"code": "DMC-27", "name": "DMC 223,179,166", "r": 223, "g": 179, "b": 166},
    {"code": "DMC-28", "name": "DMC 236,217,207", "r": 236, "g": 217, "b": 207},
    {"code": "DMC-29", "name": "DMC 120,78,36", "r": 120, "g": 78, "b": 36},
    {"code": "DMC-30", "name": "DMC 170,103,48", "r": 170, "g": 103, "b": 48},
    {"code": "DMC-31", "name": "DMC 158,51,50", "r": 158, "g": 51, "b": 50},
    {"code": "DMC-32", "name": "DMC 246,227,17", "r": 246, "g": 227, "b": 17},
    {"code": "DMC-33", "name": "DMC 184,67,81", "r": 184, "g": 67, "b": 81},
    {"code": "DMC-34", "name": "DMC 44,50,37", "r": 44, "g": 50, "b": 37},
    {"code": "DMC-35", "name": "DMC 48,80,111", "r": 48, "g": 80, "b": 111},
    {"code": "DMC-36", "name": "DMC 56,97,137", "r": 56, "g": 97, "b": 137},
    {"code": "DMC-37", "name": "DMC 142,93,92", "r": 142, "g": 93, "b": 92},
    {"code": "DMC-38", "name": "DMC 191,136,156", "r": 191, "g": 136, "b": 156},
    {"code": "DMC-39", "name": "DMC 105,114,117", "r": 105, "g": 114, "b": 117},
    {"code": "DMC-40", "name": "DMC 160,167,176", "r": 160, "g": 167, "b": 176},
    {"code": "DMC-41", "name": "DMC 53,99,61", "r": 53, "g": 99, "b": 61},
    {"code": "DMC-42", "name": "DMC 113,160,114", "r": 113, "g": 160, "b": 114},
    {"code": "DMC-43", "name": "DMC 177,39,42", "r": 177, "g": 39, "b": 42},
    {"code": "DMC-44", "name": "DMC 88,128,175", "r": 88, "g": 128, "b": 175},
    {"code": "DMC-45", "name": "DMC 169,53,62", "r": 169, "g": 53, "b": 62},
    {"code": "DMC-46", "name": "DMC 122,85,119", "r": 122, "g": 85, "b": 119},
    {"code": "DMC-47", "name": "DMC 110,100,167", "r": 110, "g": 100, "b": 167},
    {"code": "DMC-48", "name": "DMC 109,152,189", "r": 109, "g": 152, "b": 189},
    {"code": "DMC-49", "name": "DMC 216,105,123", "r": 216, "g": 105, "b": 123},
    {"code": "DMC-50", "name": "DMC 52,70,97", "r": 52, "g": 70, "b": 97},
    {"code": "DMC-51", "name": "DMC 152,158,212", "r": 152, "g": 158, "b": 212},
    {"code": "DMC-52", "name": "DMC 171,188,219", "r": 171, "g": 188, "b": 219},
    {"code": "DMC-53", "name": "DMC 190,76,66", "r": 190, "g": 76, "b": 66},
    {"code": "DMC-54", "name": "DMC 194,49,49", "r": 194, "g": 49, "b": 49},
    {"code": "DMC-55", "name": "DMC 220,91,75", "r": 220, "g": 91, "b": 75},
    {"code": "DMC-56", "name": "DMC 230,120,99", "r": 230, "g": 120, "b": 99},
    {"code": "DMC-57", "name": "DMC 244,169,144", "r": 244, "g": 169, "b": 144},
    {"code": "DMC-58", "name": "DMC 242,202,180", "r": 242, "g": 202, "b": 180},
    {"code": "DMC-59", "name": "DMC 158,79,57", "r": 158, "g": 79, "b": 57},
    {"code": "DMC-60", "name": "DMC 193,122,93", "r": 193, "g": 122, "b": 93},
    {"code": "DMC-61", "name": "DMC 88,138,93", "r": 88, "g": 138, "b": 93},
    {"code": "DMC-62", "name": "DMC 152,193,139", "r": 152, "g": 193, "b": 139},
    {"code": "DMC-63", "name": "DMC 196,226,180", "r": 196, "g": 226, "b": 180},
    {"code": "DMC-64", "name": "DMC 160,144,84", "r": 160, "g": 144, "b": 84},
    {"code": "DMC-65", "name": "DMC 165,151,93", "r": 165, "g": 151, "b": 93},
    {"code": "DMC-66", "name": "DMC 177,174,120", "r": 177, "g": 174, "b": 120},
    {"code": "DMC-67", "name": "DMC 141,82,32", "r": 141, "g": 82, "b": 32},
    {"code": "DMC-68", "name": "DMC 231,169,106", "r": 231, "g": 169, "b": 106},
    {"code": "DMC-69", "name": "DMC 189,151,122", "r": 189, "g": 151, "b": 122},
    {"code": "DMC-70", "name": "DMC 88,99,93", "r": 88, "g": 99, "b": 93},
    {"code": "DMC-71", "name": "DMC 127,133,139", "r": 127, "g": 133, "b": 139},
    {"code": "DMC-72", "name": "DMC 184,193,197", "r": 184, "g": 193, "b": 197},
    {"code": "DMC-73", "name": "DMC 156,126,68", "r": 156, "g": 126, "b": 68},
    {"code": "DMC-74", "name": "DMC 208,186,121", "r": 208, "g": 186, "b": 121},
    {"code": "DMC-75", "name": "DMC 117,88,45", "r": 117, "g": 88, "b": 45},
    {"code": "DMC-76", "name": "DMC 146,106,50", "r": 146, "g": 106, "b": 50},
    {"code": "DMC-77", "name": "DMC 181,135,71", "r": 181, "g": 135, "b": 71},
    {"code": "DMC-78", "name": "DMC 205,165,104", "r": 205, "g": 165, "b": 104},
    {"code": "DMC-79", "name": "DMC 217,184,121", "r": 217, "g": 184, "b": 121},
    {"code": "DMC-80", "name": "DMC 245,213,0", "r": 245, "g": 213, "b": 0},
    {"code": "DMC-81", "name": "DMC 240,237,133", "r": 240, "g": 237, "b": 133},
    {"code": "DMC-82", "name": "DMC 151,139,129", "r": 151, "g": 139, "b": 129},
    {"code": "DMC-83", "name": "DMC 187,174,166", "r": 187, "g": 174, "b": 166},
    {"code": "DMC-84", "name": "DMC 203,199,187", "r": 203, "g": 199, "b": 187},
    {"code": "DMC-85", "name": "DMC 100,125,55", "r": 100, "g": 125, "b": 55},
    {"code": "DMC-86", "name": "DMC 136,160,64", "r": 136, "g": 160, "b": 64},
    {"code": "DMC-87", "name": "DMC 149,174,88", "r": 149, "g": 174, "b": 88},
    {"code": "DMC-88", "name": "DMC 193,206,123", "r": 193, "g": 206, "b": 123},
    {"code": "DMC-89", "name": "DMC 153,52,49", "r": 153, "g": 52, "b": 49},
    {"code": "DMC-90", "name": "DMC 46,76,59", "r": 46, "g": 76, "b": 59},
    {"code": "DMC-91", "name": "DMC 74,120,98", "r": 74, "g": 120, "b": 98},
    {"code": "DMC-92", "name": "DMC 104,152,126", "r": 104, "g": 152, "b": 126},
    {"code": "DMC-93", "name": "DMC 130,177,154", "r": 130, "g": 177, "b": 154},
    {"code": "DMC-94", "name": "DMC 65,130,83", "r": 65, "g": 130, "b": 83},
    {"code": "DMC-95", "name": "DMC 67,120,164", "r": 67, "g": 120, "b": 164},
    {"code": "DMC-96", "name": "DMC 100,161,185", "r": 100, "g": 161, "b": 185},
    {"code": "DMC-97", "name": "DMC 145,192,215", "r": 145, "g": 192, "b": 215},
    {"code": "DMC-98", "name": "DMC 82,109,74", "r": 82, "g": 109, "b": 74},
    {"code": "DMC-99", "name": "DMC 142,162,125", "r": 142, "g": 162, "b": 125},
    {"code": "DMC-100", "name": "DMC 162,179,141", "r": 162, "g": 179, "b": 141},
    {"code": "DMC-101", "name": "DMC 173,181,151", "r": 173, "g": 181, "b": 151},
    {"code": "DMC-102", "name": "DMC 99,107,91", "r": 99, "g": 107, "b": 91},
    {"code": "DMC-103", "name": "DMC 224,214,189", "r": 224, "g": 214, "b": 189},
    {"code": "DMC-104", "name": "DMC 81,57,87", "r": 81, "g": 57, "b": 87},
    {"code": "DMC-105", "name": "DMC 136,92,144", "r": 136, "g": 92, "b": 144},
    {"code": "DMC-106", "name": "DMC 162,120,170", "r": 162, "g": 120, "b": 170},
    {"code": "DMC-107", "name": "DMC 206,168,204", "r": 206, "g": 168, "b": 204},
    {"code": "DMC-108", "name": "DMC 55,117,87", "r": 55, "g": 117, "b": 87},
    {"code": "DMC-109", "name": "DMC 89,155,109", "r": 89, "g": 155, "b": 109},
    {"code": "DMC-110", "name": "DMC 135,195,158", "r": 135, "g": 195, "b": 158},
    {"code": "DMC-111", "name": "DMC 156,208,171", "r": 156, "g": 208, "b": 171},
    {"code": "DMC-112", "name": "DMC 104,119,45", "r": 104, "g": 119, "b": 45},
    {"code": "DMC-113", "name": "DMC 132,150,48", "r": 132, "g": 150, "b": 48},
    {"code": "DMC-114", "name": "DMC 112,174,180", "r": 112, "g": 174, "b": 180},
    {"code": "DMC-115", "name": "DMC 151,204,202", "r": 151, "g": 204, "b": 202},
    {"code": "DMC-116", "name": "DMC 181,55,86", "r": 181, "g": 55, "b": 86},
    {"code": "DMC-117", "name": "DMC 205,68,108", "r": 205, "g": 68, "b": 108},
    {"code": "DMC-118", "name": "DMC 215,83,126", "r": 215, "g": 83, "b": 126},
    {"code": "DMC-119", "name": "DMC 235,128,167", "r": 235, "g": 128, "b": 167},
    {"code": "DMC-120", "name": "DMC 236,154,185", "r": 236, "g": 154, "b": 185},
    {"code": "DMC-121", "name": "DMC 242,186,211", "r": 242, "g": 186, "b": 211},
    {"code": "DMC-122", "name": "DMC 223,45,35", "r": 223, "g": 45, "b": 35},
    {"code": "DMC-123", "name": "DMC 244,70,52", "r": 244, "g": 70, "b": 52},
    {"code": "DMC-124", "name": "DMC 115,105,67", "r": 115, "g": 105, "b": 67},
    {"code": "DMC-125", "name": "DMC 137,128,85", "r": 137, "g": 128, "b": 85},
    {"code": "DMC-126", "name": "DMC 173,159,112", "r": 173, "g": 159, "b": 112},
    {"code": "DMC-127", "name": "DMC 199,197,162", "r": 199, "g": 197, "b": 162},
    {"code": "DMC-128", "name": "DMC 138,98,69", "r": 138, "g": 98, "b": 69},
    {"code": "DMC-129", "name": "DMC 146,141,105", "r": 146, "g": 141, "b": 105},
    {"code": "DMC-130", "name": "DMC 165,163,129", "r": 165, "g": 163, "b": 129},
    {"code": "DMC-131", "name": "DMC 203,203,172", "r": 203, "g": 203, "b": 172},
    {"code": "DMC-132", "name": "DMC 116,126,101", "r": 116, "g": 126, "b": 101},
    {"code": "DMC-133", "name": "DMC 135,142,121", "r": 135, "g": 142, "b": 121},
    {"code": "DMC-134", "name": "DMC 161,168,143", "r": 161, "g": 168, "b": 143},
    {"code": "DMC-135", "name": "DMC 186,191,173", "r": 186, "g": 191, "b": 173},
    {"code": "DMC-136", "name": "DMC 209,38,39", "r": 209, "g": 38, "b": 39},
    {"code": "DMC-137", "name": "DMC 226,202,123", "r": 226, "g": 202, "b": 123},
    {"code": "DMC-138", "name": "DMC 224,217,161", "r": 224, "g": 217, "b": 161},
    {"code": "DMC-139", "name": "DMC 173,142,65", "r": 173, "g": 142, "b": 65},
    {"code": "DMC-140", "name": "DMC 16,107,61", "r": 16, "g": 107, "b": 61},
    {"code": "DMC-141", "name": "DMC 46,130,72", "r": 46, "g": 130, "b": 72},
    {"code": "DMC-142", "name": "DMC 61,140,75", "r": 61, "g": 140, "b": 75},
    {"code": "DMC-143", "name": "DMC 89,160,82", "r": 89, "g": 160, "b": 82},
    {"code": "DMC-144", "name": "DMC 129,184,94", "r": 129, "g": 184, "b": 94},
    {"code": "DMC-145", "name": "DMC 147,189,87", "r": 147, "g": 189, "b": 87},
    {"code": "DMC-146", "name": "DMC 232,233,216", "r": 232, "g": 233, "b": 216},
    {"code": "DMC-147", "name": "DMC 169,67,114", "r": 169, "g": 67, "b": 114},
    {"code": "DMC-148", "name": "DMC 218,98,38", "r": 218, "g": 98, "b": 38},
    {"code": "DMC-149", "name": "DMC 239,127,64", "r": 239, "g": 127, "b": 64},
    {"code": "DMC-150", "name": "DMC 246,167,102", "r": 246, "g": 167, "b": 102},
    {"code": "DMC-151", "name": "DMC 244,210,78", "r": 244, "g": 210, "b": 78},
    {"code": "DMC-152", "name": "DMC 245,227,83", "r": 245, "g": 227, "b": 83},
    {"code": "DMC-153", "name": "DMC 241,234,132", "r": 241, "g": 234, "b": 132},
    {"code": "DMC-154", "name": "DMC 236,191,60", "r": 236, "g": 191, "b": 60},
    {"code": "DMC-155", "name": "DMC 204,172,88", "r": 204, "g": 172, "b": 88},
    {"code": "DMC-156", "name": "DMC 115,112,43", "r": 115, "g": 112, "b": 43},
    {"code": "DMC-157", "name": "DMC 132,126,42", "r": 132, "g": 126, "b": 42},
    {"code": "DMC-158", "name": "DMC 172,162,62", "r": 172, "g": 162, "b": 62},
    {"code": "DMC-159", "name": "DMC 188,179,91", "r": 188, "g": 179, "b": 91},
    {"code": "DMC-160", "name": "DMC 217,195,143", "r": 217, "g": 195, "b": 143},
    {"code": "DMC-161", "name": "DMC 229,218,178", "r": 229, "g": 218, "b": 178},
    {"code": "DMC-162", "name": "DMC 245,116,25", "r": 245, "g": 116, "b": 25},
    {"code": "DMC-163", "name": "DMC 246,151,38", "r": 246, "g": 151, "b": 38},
    {"code": "DMC-164", "name": "DMC 248,190,41", "r": 248, "g": 190, "b": 41},
    {"code": "DMC-165", "name": "DMC 246,216,87", "r": 246, "g": 216, "b": 87},
    {"code": "DMC-166", "name": "DMC 242,229,129", "r": 242, "g": 229, "b": 129},
    {"code": "DMC-167", "name": "DMC 239,234,162", "r": 239, "g": 234, "b": 162},
    {"code": "DMC-168", "name": "DMC 233,235,204", "r": 233, "g": 235, "b": 204},
    {"code": "DMC-169", "name": "DMC 199,232,232", "r": 199, "g": 232, "b": 232},
    {"code": "DMC-170", "name": "DMC 238,205,175", "r": 238, "g": 205, "b": 175},
    {"code": "DMC-171", "name": "DMC 228,179,147", "r": 228, "g": 179, "b": 147},
    {"code": "DMC-172", "name": "DMC 238,158,149", "r": 238, "g": 158, "b": 149},
    {"code": "DMC-173", "name": "DMC 242,191,184", "r": 242, "g": 191, "b": 184},
    {"code": "DMC-174", "name": "DMC 217,223,225", "r": 217, "g": 223, "b": 225},
    {"code": "DMC-175", "name": "DMC 208,228,175", "r": 208, "g": 228, "b": 175},
    {"code": "DMC-176", "name": "DMC 206,228,232", "r": 206, "g": 228, "b": 232},
    {"code": "DMC-177", "name": "DMC 138,55,59", "r": 138, "g": 55, "b": 59},
    {"code": "DMC-178", "name": "DMC 218,183,182", "r": 218, "g": 183, "b": 182},
    {"code": "DMC-179", "name": "DMC 109,87,72", "r": 109, "g": 87, "b": 72},
    {"code": "DMC-180", "name": "DMC 151,104,44", "r": 151, "g": 104, "b": 44},
    {"code": "DMC-181", "name": "DMC 180,131,43", "r": 180, "g": 131, "b": 43},
    {"code": "DMC-182", "name": "DMC 206,158,55", "r": 206, "g": 158, "b": 55},
    {"code": "DMC-183", "name": "DMC 66,71,121", "r": 66, "g": 71, "b": 121},
    {"code": "DMC-184", "name": "DMC 88,101,158", "r": 88, "g": 101, "b": 158},
    {"code": "DMC-185", "name": "DMC 119,142,182", "r": 119, "g": 142, "b": 182},
    {"code": "DMC-186", "name": "DMC 146,175,205", "r": 146, "g": 175, "b": 205},
    {"code": "DMC-187", "name": "DMC 48,66,127", "r": 48, "g": 66, "b": 127},
    {"code": "DMC-188", "name": "DMC 65,87,148", "r": 65, "g": 87, "b": 148},
    {"code": "DMC-189", "name": "DMC 76,113,179", "r": 76, "g": 113, "b": 179},
    {"code": "DMC-190", "name": "DMC 121,158,202", "r": 121, "g": 158, "b": 202},
    {"code": "DMC-191", "name": "DMC 174,207,228", "r": 174, "g": 207, "b": 228},
    {"code": "DMC-192", "name": "DMC 108,83,47", "r": 108, "g": 83, "b": 47},
    {"code": "DMC-193", "name": "DMC 44,73,111", "r": 44, "g": 73, "b": 111},
    {"code": "DMC-194", "name": "DMC 96,165,182", "r": 96, "g": 165, "b": 182},
    {"code": "DMC-195", "name": "DMC 145,177,219", "r": 145, "g": 177, "b": 219},
    {"code": "DMC-196", "name": "DMC 131,176,205", "r": 131, "g": 176, "b": 205},
    {"code": "DMC-197", "name": "DMC 113,57,51", "r": 113, "g": 57, "b": 51},
    {"code": "DMC-198", "name": "DMC 134,57,50", "r": 134, "g": 57, "b": 50},
    {"code": "DMC-199", "name": "DMC 151,62,59", "r": 151, "g": 62, "b": 59},
    {"code": "DMC-200", "name": "DMC 176,43,35", "r": 176, "g": 43, "b": 35},
    {"code": "DMC-201", "name": "DMC 239,216,212", "r": 239, "g": 216, "b": 212},
    {"code": "DMC-202", "name": "DMC 237,226,220", "r": 237, "g": 226, "b": 220},
    {"code": "DMC-203", "name": "DMC 40,57,117", "r": 40, "g": 57, "b": 117},
    {"code": "DMC-204", "name": "DMC 227,226,200", "r": 227, "g": 226, "b": 200},
    {"code": "DMC-205", "name": "DMC 47,56,74", "r": 47, "g": 56, "b": 74},
    {"code": "DMC-206", "name": "DMC 59,98,146", "r": 59, "g": 98, "b": 146},
    {"code": "DMC-207", "name": "DMC 64,112,161", "r": 64, "g": 112, "b": 161},
    {"code": "DMC-208", "name": "DMC 94,145,188", "r": 94, "g": 145, "b": 188},
    {"code": "DMC-209", "name": "DMC 173,209,229", "r": 173, "g": 209, "b": 229},
    {"code": "DMC-210", "name": "DMC 192,223,226", "r": 192, "g": 223, "b": 226},
    {"code": "DMC-211", "name": "DMC 112,94,44", "r": 112, "g": 94, "b": 44},
    {"code": "DMC-212", "name": "DMC 124,112,50", "r": 124, "g": 112, "b": 50},
    {"code": "DMC-213", "name": "DMC 140,125,49", "r": 140, "g": 125, "b": 49},
    {"code": "DMC-214", "name": "DMC 170,149,58", "r": 170, "g": 149, "b": 58},
    {"code": "DMC-215", "name": "DMC 187,169,80", "r": 187, "g": 169, "b": 80},
    {"code": "DMC-216", "name": "DMC 205,190,103", "r": 205, "g": 190, "b": 103},
    {"code": "DMC-217", "name": "DMC 93,77,53", "r": 93, "g": 77, "b": 53},
    {"code": "DMC-218", "name": "DMC 111,94,67", "r": 111, "g": 94, "b": 67},
    {"code": "DMC-219", "name": "DMC 147,131,96", "r": 147, "g": 131, "b": 96},
    {"code": "DMC-220", "name": "DMC 171,156,125", "r": 171, "g": 156, "b": 125},
    {"code": "DMC-221", "name": "DMC 208,198,171", "r": 208, "g": 198, "b": 171},
    {"code": "DMC-222", "name": "DMC 94,99,81", "r": 94, "g": 99, "b": 81},
    {"code": "DMC-223", "name": "DMC 129,107,55", "r": 129, "g": 107, "b": 55},
    {"code": "DMC-224", "name": "DMC 39,82,47", "r": 39, "g": 82, "b": 47},
    {"code": "DMC-225", "name": "DMC 229,69,91", "r": 229, "g": 69, "b": 91},
    {"code": "DMC-226", "name": "DMC 240,96,111", "r": 240, "g": 96, "b": 111},
    {"code": "DMC-227", "name": "DMC 241,114,134", "r": 241, "g": 114, "b": 134},
    {"code": "DMC-228", "name": "DMC 244,148,167", "r": 244, "g": 148, "b": 167},
    {"code": "DMC-229", "name": "DMC 60,98,58", "r": 60, "g": 98, "b": 58},
    {"code": "DMC-230", "name": "DMC 99,81,47", "r": 99, "g": 81, "b": 47},
    {"code": "DMC-231", "name": "DMC 230,129,148", "r": 230, "g": 129, "b": 148},
    {"code": "DMC-232", "name": "DMC 203,68,49", "r": 203, "g": 68, "b": 49},
    {"code": "DMC-233", "name": "DMC 107,59,51", "r": 107, "g": 59, "b": 51},
    {"code": "DMC-234", "name": "DMC 73,116,53", "r": 73, "g": 116, "b": 53},
    {"code": "DMC-235", "name": "DMC 88,135,47", "r": 88, "g": 135, "b": 47},
    {"code": "DMC-236", "name": "DMC 107,169,32", "r": 107, "g": 169, "b": 32},
    {"code": "DMC-237", "name": "DMC 152,190,48", "r": 152, "g": 190, "b": 48},
    {"code": "DMC-238", "name": "DMC 23,118,71", "r": 23, "g": 118, "b": 71},
    {"code": "DMC-239", "name": "DMC 33,135,81", "r": 33, "g": 135, "b": 81},
    {"code": "DMC-240", "name": "DMC 62,158,102", "r": 62, "g": 158, "b": 102},
    {"code": "DMC-241", "name": "DMC 95,183,132", "r": 95, "g": 183, "b": 132},
    {"code": "DMC-242", "name": "DMC 123,198,146", "r": 123, "g": 198, "b": 146},
    {"code": "DMC-243", "name": "DMC 126,52,73", "r": 126, "g": 52, "b": 73},
    {"code": "DMC-244", "name": "DMC 155,69,106", "r": 155, "g": 69, "b": 106},
    {"code": "DMC-245", "name": "DMC 145,77,45", "r": 145, "g": 77, "b": 45},
    {"code": "DMC-246", "name": "DMC 165,79,40", "r": 165, "g": 79, "b": 40},
    {"code": "DMC-247", "name": "DMC 175,89,45", "r": 175, "g": 89, "b": 45},
    {"code": "DMC-248", "name": "DMC 200,112,56", "r": 200, "g": 112, "b": 56},
    {"code": "DMC-249", "name": "DMC 224,135,73", "r": 224, "g": 135, "b": 73},
    {"code": "DMC-250", "name": "DMC 66,96,92", "r": 66, "g": 96, "b": 92},
    {"code": "DMC-251", "name": "DMC 128,154,148", "r": 128, "g": 154, "b": 148},
    {"code": "DMC-252", "name": "DMC 166,189,180", "r": 166, "g": 189, "b": 180},
    {"code": "DMC-253", "name": "DMC 191,208,201", "r": 191, "g": 208, "b": 201},
    {"code": "DMC-254", "name": "DMC 67,94,103", "r": 67, "g": 94, "b": 103},
    {"code": "DMC-255", "name": "DMC 103,137,151", "r": 103, "g": 137, "b": 151},
    {"code": "DMC-256", "name": "DMC 143,174,185", "r": 143, "g": 174, "b": 185},
    {"code": "DMC-257", "name": "DMC 62,74,49", "r": 62, "g": 74, "b": 49},
    {"code": "DMC-258", "name": "DMC 73,92,59", "r": 73, "g": 92, "b": 59},
    {"code": "DMC-259", "name": "DMC 86,100,50", "r": 86, "g": 100, "b": 50},
    {"code": "DMC-260", "name": "DMC 93,113,54", "r": 93, "g": 113, "b": 54},
    {"code": "DMC-261", "name": "DMC 80,68,43", "r": 80, "g": 68, "b": 43},
    {"code": "DMC-262", "name": "DMC 39,45,52", "r": 39, "g": 45, "b": 52},
    {"code": "DMC-263", "name": "DMC 27,153,127", "r": 27, "g": 153, "b": 127},
    {"code": "DMC-264", "name": "DMC 238,206,166", "r": 238, "g": 206, "b": 166},
    {"code": "DMC-265", "name": "DMC 229,75,36", "r": 229, "g": 75, "b": 36},
    {"code": "DMC-266", "name": "DMC 233,78,43", "r": 233, "g": 78, "b": 43},
    {"code": "DMC-267", "name": "DMC 237,225,204", "r": 237, "g": 225, "b": 204},
    {"code": "DMC-268", "name": "DMC 231,203,175", "r": 231, "g": 203, "b": 175},
    {"code": "DMC-269", "name": "DMC 237,222,189", "r": 237, "g": 222, "b": 189},
    {"code": "DMC-270", "name": "DMC 144,209,158", "r": 144, "g": 209, "b": 158},
    {"code": "DMC-271", "name": "DMC 187,233,193", "r": 187, "g": 233, "b": 193},
    {"code": "DMC-272", "name": "DMC 238,102,136", "r": 238, "g": 102, "b": 136},
    {"code": "DMC-273", "name": "DMC 246,162,181", "r": 246, "g": 162, "b": 181},
    {"code": "DMC-274", "name": "DMC 76,178,160", "r": 76, "g": 178, "b": 160},
    {"code": "DMC-275", "name": "DMC 104,193,178", "r": 104, "g": 193, "b": 178},
    {"code": "DMC-276", "name": "DMC 220,116,133", "r": 220, "g": 116, "b": 133},
    {"code": "DMC-277", "name": "DMC 228,138,155", "r": 228, "g": 138, "b": 155},
    {"code": "DMC-278", "name": "DMC 241,206,210", "r": 241, "g": 206, "b": 210},
    {"code": "DMC-279", "name": "DMC 157,221,213", "r": 157, "g": 221, "b": 213},
    {"code": "DMC-280", "name": "DMC 167,206,175", "r": 167, "g": 206, "b": 175},
    {"code": "DMC-281", "name": "DMC 243,200,182", "r": 243, "g": 200, "b": 182},
    {"code": "DMC-282", "name": "DMC 249,118,53", "r": 249, "g": 118, "b": 53},
    {"code": "DMC-283", "name": "DMC 243,185,6", "r": 243, "g": 185, "b": 6},
    {"code": "DMC-284", "name": "DMC 245,214,2", "r": 245, "g": 214, "b": 2},
    {"code": "DMC-285", "name": "DMC 139,91,44", "r": 139, "g": 91, "b": 44},
    {"code": "DMC-286", "name": "DMC 196,135,51", "r": 196, "g": 135, "b": 51},
    {"code": "DMC-287", "name": "DMC 222,167,85", "r": 222, "g": 167, "b": 85},
    {"code": "DMC-288", "name": "DMC 58,116,59", "r": 58, "g": 116, "b": 59},
    {"code": "DMC-289", "name": "DMC 94,140,80", "r": 94, "g": 140, "b": 80},
    {"code": "DMC-290", "name": "DMC 119,167,93", "r": 119, "g": 167, "b": 93},
    {"code": "DMC-291", "name": "DMC 135,180,110", "r": 135, "g": 180, "b": 110},
    {"code": "DMC-292", "name": "DMC 36,122,101", "r": 36, "g": 122, "b": 101},
    {"code": "DMC-293", "name": "DMC 87,169,146", "r": 87, "g": 169, "b": 146},
    {"code": "DMC-294", "name": "DMC 120,190,167", "r": 120, "g": 190, "b": 167},
    {"code": "DMC-295", "name": "DMC 1,108,192", "r": 1, "g": 108, "b": 192},
    {"code": "DMC-296", "name": "DMC 45,164,227", "r": 45, "g": 164, "b": 227},
    {"code": "DMC-297", "name": "DMC 118,116,63", "r": 118, "g": 116, "b": 63},
    {"code": "DMC-298", "name": "DMC 149,146,83", "r": 149, "g": 146, "b": 83},
    {"code": "DMC-299", "name": "DMC 177,178,123", "r": 177, "g": 178, "b": 123},
    {"code": "DMC-300", "name": "DMC 89,87,61", "r": 89, "g": 87, "b": 61},
    {"code": "DMC-301", "name": "DMC 150,155,126", "r": 150, "g": 155, "b": 126},
    {"code": "DMC-302", "name": "DMC 178,182,154", "r": 178, "g": 182, "b": 154},
    {"code": "DMC-303", "name": "DMC 203,207,192", "r": 203, "g": 207, "b": 192},
    {"code": "DMC-304", "name": "DMC 82,75,48", "r": 82, "g": 75, "b": 48},
    {"code": "DMC-305", "name": "DMC 167,160,121", "r": 167, "g": 160, "b": 121},
    {"code": "DMC-306", "name": "DMC 220,218,194", "r": 220, "g": 218, "b": 194},
    {"code": "DMC-307", "name": "DMC 146,121,128", "r": 146, "g": 121, "b": 128},
    {"code": "DMC-308", "name": "DMC 180,167,176", "r": 180, "g": 167, "b": 176},
    {"code": "DMC-309", "name": "DMC 182,162,101", "r": 182, "g": 162, "b": 101},
    {"code": "DMC-310", "name": "DMC 207,196,127", "r": 207, "g": 196, "b": 127},
    {"code": "DMC-311", "name": "DMC 222,217,164", "r": 222, "g": 217, "b": 164},
    {"code": "DMC-312", "name": "DMC 98,107,64", "r": 98, "g": 107, "b": 64},
    {"code": "DMC-313", "name": "DMC 143,154,109", "r": 143, "g": 154, "b": 109},
    {"code": "DMC-314", "name": "DMC 162,173,128", "r": 162, "g": 173, "b": 128},
    {"code": "DMC-315", "name": "DMC 199,155,118", "r": 199, "g": 155, "b": 118},
    {"code": "DMC-316", "name": "DMC 213,221,209", "r": 213, "g": 221, "b": 209},
    {"code": "DMC-317", "name": "DMC 237,236,169", "r": 237, "g": 236, "b": 169},
    {"code": "DMC-318", "name": "DMC 163,196,224", "r": 163, "g": 196, "b": 224},
    {"code": "DMC-319", "name": "DMC 239,171,176", "r": 239, "g": 171, "b": 176},
    {"code": "DMC-320", "name": "DMC 210,108,98", "r": 210, "g": 108, "b": 98},
    {"code": "DMC-321", "name": "DMC 247,126,91", "r": 247, "g": 126, "b": 91},
    {"code": "DMC-322", "name": "DMC 247,170,144", "r": 247, "g": 170, "b": 144},
    {"code": "DMC-323", "name": "DMC 72,109,58", "r": 72, "g": 109, "b": 58},
    {"code": "DMC-324", "name": "DMC 107,142,77", "r": 107, "g": 142, "b": 77},
    {"code": "DMC-325", "name": "DMC 127,162,92", "r": 127, "g": 162, "b": 92},
    {"code": "DMC-326", "name": "DMC 182,199,127", "r": 182, "g": 199, "b": 127},
    {"code": "DMC-327", "name": "DMC 185,85,105", "r": 185, "g": 85, "b": 105},
    {"code": "DMC-328", "name": "DMC 227,165,170", "r": 227, "g": 165, "b": 170},
    {"code": "DMC-329", "name": "DMC 86,107,68", "r": 86, "g": 107, "b": 68},
    {"code": "DMC-330", "name": "DMC 114,141,96", "r": 114, "g": 141, "b": 96},
    {"code": "DMC-331", "name": "DMC 150,168,113", "r": 150, "g": 168, "b": 113},
    {"code": "DMC-332", "name": "DMC 58,57,38", "r": 58, "g": 57, "b": 38},
    {"code": "DMC-333", "name": "DMC 191,99,147", "r": 191, "g": 99, "b": 147},
    {"code": "DMC-334", "name": "DMC 223,146,189", "r": 223, "g": 146, "b": 189},
    {"code": "DMC-335", "name": "DMC 233,175,211", "r": 233, "g": 175, "b": 211},
    {"code": "DMC-336", "name": "DMC 124,61,68", "r": 124, "g": 61, "b": 68},
    {"code": "DMC-337", "name": "DMC 185,101,123", "r": 185, "g": 101, "b": 123},
    {"code": "DMC-338", "name": "DMC 211,136,155", "r": 211, "g": 136, "b": 155},
    {"code": "DMC-339", "name": "DMC 234,182,200", "r": 234, "g": 182, "b": 200},
    {"code": "DMC-340", "name": "DMC 229,91,94", "r": 229, "g": 91, "b": 94},
    {"code": "DMC-341", "name": "DMC 248,131,142", "r": 248, "g": 131, "b": 142},
    {"code": "DMC-342", "name": "DMC 245,167,182", "r": 245, "g": 167, "b": 182},
    {"code": "DMC-343", "name": "DMC 223,131,120", "r": 223, "g": 131, "b": 120},
    {"code": "DMC-344", "name": "DMC 240,209,203", "r": 240, "g": 209, "b": 203},
    {"code": "DMC-345", "name": "DMC 241,174,186", "r": 241, "g": 174, "b": 186},
    {"code": "DMC-346", "name": "DMC 159,87,78", "r": 159, "g": 87, "b": 78},
    {"code": "DMC-347", "name": "DMC 178,108,103", "r": 178, "g": 108, "b": 103},
    {"code": "DMC-348", "name": "DMC 159,109,109", "r": 159, "g": 109, "b": 109},
    {"code": "DMC-349", "name": "DMC 213,171,178", "r": 213, "g": 171, "b": 178},
    {"code": "DMC-350", "name": "DMC 202,106,124", "r": 202, "g": 106, "b": 124},
    {"code": "DMC-351", "name": "DMC 221,142,152", "r": 221, "g": 142, "b": 152},
    {"code": "DMC-352", "name": "DMC 124,98,102", "r": 124, "g": 98, "b": 102},
    {"code": "DMC-353", "name": "DMC 202,195,203", "r": 202, "g": 195, "b": 203},
    {"code": "DMC-354", "name": "DMC 125,123,185", "r": 125, "g": 123, "b": 185},
    {"code": "DMC-355", "name": "DMC 204,213,231", "r": 204, "g": 213, "b": 231},
    {"code": "DMC-356", "name": "DMC 47,77,93", "r": 47, "g": 77, "b": 93},
    {"code": "DMC-357", "name": "DMC 172,199,209", "r": 172, "g": 199, "b": 209},
    {"code": "DMC-358", "name": "DMC 196,218,224", "r": 196, "g": 218, "b": 224},
    {"code": "DMC-359", "name": "DMC 145,182,214", "r": 145, "g": 182, "b": 214},
    {"code": "DMC-360", "name": "DMC 221,233,231", "r": 221, "g": 233, "b": 231},
    {"code": "DMC-361", "name": "DMC 82,141,174", "r": 82, "g": 141, "b": 174},
    {"code": "DMC-362", "name": "DMC 175,217,228", "r": 175, "g": 217, "b": 228},
    {"code": "DMC-363", "name": "DMC 48,116,146", "r": 48, "g": 116, "b": 146},
    {"code": "DMC-364", "name": "DMC 137,196,209", "r": 137, "g": 196, "b": 209},
    {"code": "DMC-365", "name": "DMC 93,125,123", "r": 93, "g": 125, "b": 123},
    {"code": "DMC-366", "name": "DMC 236,232,211", "r": 236, "g": 232, "b": 211},
    {"code": "DMC-367", "name": "DMC 232,181,143", "r": 232, "g": 181, "b": 143},
    {"code": "DMC-368", "name": "DMC 165,125,95", "r": 165, "g": 125, "b": 95},
    {"code": "DMC-369", "name": "DMC 230,212,183", "r": 230, "g": 212, "b": 183},
    {"code": "DMC-370", "name": "DMC 207,131,72", "r": 207, "g": 131, "b": 72},
    {"code": "DMC-371", "name": "DMC 147,66,52", "r": 147, "g": 66, "b": 52},
    {"code": "DMC-372", "name": "DMC 214,148,120", "r": 214, "g": 148, "b": 120},
    {"code": "DMC-373", "name": "DMC 235,192,167", "r": 235, "g": 192, "b": 167},
    {"code": "DMC-374", "name": "DMC 107,95,62", "r": 107, "g": 95, "b": 62},
    {"code": "DMC-375", "name": "DMC 191,183,147", "r": 191, "g": 183, "b": 147},
    {"code": "DMC-376", "name": "DMC 113,113,85", "r": 113, "g": 113, "b": 85},
    {"code": "DMC-377", "name": "DMC 135,122,90", "r": 135, "g": 122, "b": 90},
    {"code": "DMC-378", "name": "DMC 76,84,74", "r": 76, "g": 84, "b": 74},
    {"code": "DMC-379", "name": "DMC 232,68,78", "r": 232, "g": 68, "b": 78},
    {"code": "DMC-380", "name": "DMC 123,68,75", "r": 123, "g": 68, "b": 75},
    {"code": "DMC-381", "name": "DMC 146,73,91", "r": 146, "g": 73, "b": 91},
    {"code": "DMC-382", "name": "DMC 200,70,115", "r": 200, "g": 70, "b": 115},
    {"code": "DMC-383", "name": "DMC 213,87,134", "r": 213, "g": 87, "b": 134},
    {"code": "DMC-384", "name": "DMC 226,128,165", "r": 226, "g": 128, "b": 165},
    {"code": "DMC-385", "name": "DMC 104,122,171", "r": 104, "g": 122, "b": 171},
    {"code": "DMC-386", "name": "DMC 41,97,107", "r": 41, "g": 97, "b": 107},
    {"code": "DMC-387", "name": "DMC 47,121,130", "r": 47, "g": 121, "b": 130},
    {"code": "DMC-388", "name": "DMC 83,151,160", "r": 83, "g": 151, "b": 160},
    {"code": "DMC-389", "name": "DMC 172,217,215", "r": 172, "g": 217, "b": 215},
    {"code": "DMC-390", "name": "DMC 6,144,129", "r": 6, "g": 144, "b": 129},
    {"code": "DMC-391", "name": "DMC 157,196,178", "r": 157, "g": 196, "b": 178},
    {"code": "DMC-392", "name": "DMC 51,138,118", "r": 51, "g": 138, "b": 118},
    {"code": "DMC-393", "name": "DMC 83,138,109", "r": 83, "g": 138, "b": 109},
    {"code": "DMC-394", "name": "DMC 113,167,141", "r": 113, "g": 167, "b": 141},
    {"code": "DMC-395", "name": "DMC 146,188,166", "r": 146, "g": 188, "b": 166},
    {"code": "DMC-396", "name": "DMC 20,104,64", "r": 20, "g": 104, "b": 64},
    {"code": "DMC-397", "name": "DMC 197,194,79", "r": 197, "g": 194, "b": 79},
    {"code": "DMC-398", "name": "DMC 217,182,61", "r": 217, "g": 182, "b": 61},
    {"code": "DMC-399", "name": "DMC 225,196,84", "r": 225, "g": 196, "b": 84},
    {"code": "DMC-400", "name": "DMC 233,212,113", "r": 233, "g": 212, "b": 113},
    {"code": "DMC-401", "name": "DMC 236,237,197", "r": 236, "g": 237, "b": 197},
    {"code": "DMC-402", "name": "DMC 246,187,164", "r": 246, "g": 187, "b": 164},
    {"code": "DMC-403", "name": "DMC 245,186,130", "r": 245, "g": 186, "b": 130},
    {"code": "DMC-404", "name": "DMC 178,117,52", "r": 178, "g": 117, "b": 52},
    {"code": "DMC-405", "name": "DMC 234,186,108", "r": 234, "g": 186, "b": 108},
    {"code": "DMC-406", "name": "DMC 184,157,93", "r": 184, "g": 157, "b": 93},
    {"code": "DMC-407", "name": "DMC 166,134,58", "r": 166, "g": 134, "b": 58},
    {"code": "DMC-408", "name": "DMC 182,100,74", "r": 182, "g": 100, "b": 74},
    {"code": "DMC-409", "name": "DMC 182,70,78", "r": 182, "g": 70, "b": 78},
    {"code": "DMC-410", "name": "DMC 212,96,107", "r": 212, "g": 96, "b": 107},
    {"code": "DMC-411", "name": "DMC 226,132,141", "r": 226, "g": 132, "b": 141},
    {"code": "DMC-412", "name": "DMC 113,73,96", "r": 113, "g": 73, "b": 96},
    {"code": "DMC-413", "name": "DMC 152,108,139", "r": 152, "g": 108, "b": 139},
    {"code": "DMC-414", "name": "DMC 185,145,173", "r": 185, "g": 145, "b": 173},
    {"code": "DMC-415", "name": "DMC 135,93,155", "r": 135, "g": 93, "b": 155},
    {"code": "DMC-416", "name": "DMC 107,131,190", "r": 107, "g": 131, "b": 190},
    {"code": "DMC-417", "name": "DMC 130,154,206", "r": 130, "g": 154, "b": 206},
    {"code": "DMC-418", "name": "DMC 168,196,229", "r": 168, "g": 196, "b": 229},
    {"code": "DMC-419", "name": "DMC 184,213,226", "r": 184, "g": 213, "b": 226},
    {"code": "DMC-420", "name": "DMC 44,95,135", "r": 44, "g": 95, "b": 135},
    {"code": "DMC-421", "name": "DMC 0,126,201", "r": 0, "g": 126, "b": 201},
    {"code": "DMC-422", "name": "DMC 0,141,188", "r": 0, "g": 141, "b": 188},
    {"code": "DMC-423", "name": "DMC 0,181,217", "r": 0, "g": 181, "b": 217},
    {"code": "DMC-424", "name": "DMC 23,197,226", "r": 23, "g": 197, "b": 226},
    {"code": "DMC-425", "name": "DMC 29,111,102", "r": 29, "g": 111, "b": 102},
    {"code": "DMC-426", "name": "DMC 60,143,133", "r": 60, "g": 143, "b": 133},
    {"code": "DMC-427", "name": "DMC 99,171,163", "r": 99, "g": 171, "b": 163},
    {"code": "DMC-428", "name": "DMC 16,135,105", "r": 16, "g": 135, "b": 105},
    {"code": "DMC-429", "name": "DMC 72,174,147", "r": 72, "g": 174, "b": 147},
    {"code": "DMC-430", "name": "DMC 203,162,37", "r": 203, "g": 162, "b": 37},
    {"code": "DMC-431", "name": "DMC 227,142,57", "r": 227, "g": 142, "b": 57},
    {"code": "DMC-432", "name": "DMC 242,179,92", "r": 242, "g": 179, "b": 92},
    {"code": "DMC-433", "name": "DMC 240,215,136", "r": 240, "g": 215, "b": 136},
    {"code": "DMC-434", "name": "DMC 239,198,141", "r": 239, "g": 198, "b": 141},
    {"code": "DMC-435", "name": "DMC 118,72,51", "r": 118, "g": 72, "b": 51},
    {"code": "DMC-436", "name": "DMC 143,93,76", "r": 143, "g": 93, "b": 76},
    {"code": "DMC-437", "name": "DMC 193,141,118", "r": 193, "g": 141, "b": 118},
    {"code": "DMC-438", "name": "DMC 140,117,103", "r": 140, "g": 117, "b": 103},
    {"code": "DMC-439", "name": "DMC 167,147,136", "r": 167, "g": 147, "b": 136},
    {"code": "DMC-440", "name": "DMC 137,114,76", "r": 137, "g": 114, "b": 76},
    {"code": "DMC-441", "name": "DMC 163,138,101", "r": 163, "g": 138, "b": 101},
    {"code": "DMC-442", "name": "DMC 195,177,144", "r": 195, "g": 177, "b": 144},
    {"code": "DMC-443", "name": "DMC 222,225,219", "r": 222, "g": 225, "b": 219},
    {"code": "DMC-444", "name": "DMC 227,228,212", "r": 227, "g": 228, "b": 212},
    {"code": "DMC-445", "name": "DMC 174,161,175", "r": 174, "g": 161, "b": 175}
];

const BAYER_MATRIX_4X4 = [
    [0, 8, 2, 10], [12, 4, 14, 6],
    [3, 11, 1, 9], [15, 7, 13, 5]
];

const TEMPLATES = [
    { name: "Square Diamond - 20x25cm", w: 80, h: 100 },
    { name: "Square Diamond - 30x30cm", w: 120, h: 120 },
    { name: "Square Diamond - 30x40cm", w: 120, h: 161 },
    { name: "Square Diamond - 40x40cm", w: 161, h: 161 },
    { name: "Square Diamond - 40x50cm", w: 161, h: 201 },
    { name: "Square Diamond - 50x50cm", w: 201, h: 201 },
    { name: "Square Diamond - 50x60cm", w: 201, h: 241 },
    { name: "Round Diamond - 20x25cm", w: 70, h: 88 },
    { name: "Round Diamond - 30x30cm", w: 106, h: 106 },
    { name: "Round Diamond - 30x40cm", w: 106, h: 141 },
    { name: "Round Diamond - 40x40cm", w: 141, h: 141 },
    { name: "Round Diamond - 40x50cm", w: 141, h: 177 },
    { name: "Round Diamond - 50x50cm", w: 177, h: 177 },
    { name: "Round Diamond - 50x60cm", w: 177, h: 212 }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias DOM ---
    const imageLoader = document.getElementById('image-loader');
    const uploadBox = document.getElementById('upload-box');
    const processBtn = document.getElementById('process-btn');
    const paletteContainer = document.getElementById('palette-container');
    const removedColorsContainer = document.getElementById('removed-colors-container');
    const suggestionsContainer = document.getElementById('suggestions-container');
    const numColorsSlider = document.getElementById('num-colors');
    const contextMenu = document.getElementById('custom-context-menu');
    const loader = document.getElementById('loader');
    const autoProcessCheck = document.getElementById('auto-process');
    
    const originalCanvas = document.getElementById('original-canvas');
    const originalCtx = originalCanvas.getContext('2d');
    const processedCanvas = document.getElementById('processed-canvas');
    const processedCtx = processedCanvas.getContext('2d');
    
    const downloadBtn = document.getElementById('download-btn');
    const undoBtn = document.getElementById('undo-btn');
    const redoBtn = document.getElementById('redo-btn');
    const contiguousCheck = document.getElementById('contiguous-check');
    const displayArea = document.getElementById('display-area');
    const headerSingle = document.getElementById('header-single');
    const headerCompare = document.getElementById('header-compare');
    const compareBtn = document.getElementById('compare-btn');
    const compareBtn2 = document.getElementById('compare-btn-2');

    const templateSelect = document.getElementById('template-select');
    const transScaleInput = document.getElementById('trans-scale');
    const transRotateInput = document.getElementById('trans-rotate');
    const fitScreenBtn = document.getElementById('fit-screen-btn');
    const viewZoomInputs = document.querySelectorAll('.view-zoom-control'); 
    
    const algoSelect = document.getElementById('algo-select');
    const activeColorSwatches = document.querySelectorAll('.active-color-swatch');
    const highlightChecks = document.querySelectorAll('.highlight-check-sync');

    // --- ESTADO GLOBAL ---
    let originalImageObject = null;
    let debounceTimer;
    
    let composition = { x: 0, y: 0, scale: 1, rotation: 0 };
    let activeTemplate = TEMPLATES[0];
    
    let isDragging = false;
    let isResizing = false;
    let resizeHandle = null; 
    let lastMousePos = { x: 0, y: 0 };

    let masterPalette = [];
    let manuallyRemovedColors = new Set();
    let activePalette = [];
    let removedColors = [];
    let colorMap = {};
    let suggestionTargetColor = null;
    let isInitialProcessing = true;
    let lastFilteredImageData = null;
    
    let currentProcessedData = null; // Copia limpia de datos para highlight
    let highlightedColor = null;     // Color a resaltar
    let activeColorValue = 'rgb(0,0,0)';
    
    let history = [];
    let historyIndex = -1;

    const TARGET_EDITOR_WIDTH = 1000; 

    // --- HELPERS ---
    function getEditorScale() {
        if (!activeTemplate) return 1;
        return Math.max(1, TARGET_EDITOR_WIDTH / activeTemplate.w);
    }

    // --- INICIALIZACIÓN ---
    TEMPLATES.forEach((tmpl, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${tmpl.name} (${tmpl.w}x${tmpl.h}px)`;
        templateSelect.appendChild(option);
    });

    // --- ZOOM VIEW ---
    function updateViewZoom(val) {
        const cssWidth = activeTemplate.w * val;
        const cssHeight = activeTemplate.h * val;
        
        originalCanvas.style.width = `${cssWidth}px`;
        originalCanvas.style.height = `${cssHeight}px`;
        processedCanvas.style.width = `${cssWidth}px`;
        processedCanvas.style.height = `${cssHeight}px`;
        
        viewZoomInputs.forEach(input => {
            if (input.value !== val) input.value = val;
        });
    }

    viewZoomInputs.forEach(input => {
        input.addEventListener('input', (e) => updateViewZoom(e.target.value));
    });

    function fitViewToContainer() {
        const container = document.querySelector('.canvas-container');
        if (!container) return;
        const containerW = container.clientWidth;
        const containerH = container.clientHeight;
        const padding = 40; 
        const availableW = containerW - padding;
        const availableH = containerH - padding;
        const scaleX = availableW / activeTemplate.w;
        const scaleY = availableH / activeTemplate.h;
        let bestFit = Math.min(scaleX, scaleY);
        bestFit = Math.max(1, Math.min(bestFit, 20)); 
        bestFit = Math.round(bestFit * 2) / 2;
        updateViewZoom(bestFit);
    }

    // --- EVENTOS ---
    templateSelect.addEventListener('change', () => {
        activeTemplate = TEMPLATES[parseInt(templateSelect.value)];
        updateCanvasDimensions();
        fitViewToContainer();
        if (originalImageObject) {
            fitImageToTemplate();
            drawComposition(); 
        }
    });
    
    algoSelect.addEventListener('change', () => {
        if (!originalImageObject) return;
        isInitialProcessing = true;
        processImageClientSide();
    });

    function updateCanvasDimensions() {
        const editorScale = getEditorScale();
        originalCanvas.width = activeTemplate.w * editorScale;
        originalCanvas.height = activeTemplate.h * editorScale;
        processedCanvas.width = activeTemplate.w;
        processedCanvas.height = activeTemplate.h;
        if (viewZoomInputs.length > 0) {
            updateViewZoom(viewZoomInputs[0].value);
        }
    }

    imageLoader.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            processBtn.disabled = false;
            uploadBox.classList.add('hidden');
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    originalImageObject = img;
                    isInitialProcessing = true;
                    manuallyRemovedColors.clear();
                    colorMap = {};
                    
                    activeTemplate = TEMPLATES[parseInt(templateSelect.value)];
                    updateCanvasDimensions();
                    fitImageToTemplate();
                    fitViewToContainer();
                    setCompareMode(true);
                    
                    downloadBtn.disabled = true;
                    history = [];
                    historyIndex = -1;
                    updateUndoRedoButtons();
                    if (autoProcessCheck.checked) processImageClientSide();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // --- TRANSFORMACIÓN ---
    function fitImageToTemplate() {
        if (!originalImageObject) return;
        const scaleX = activeTemplate.w / originalImageObject.width;
        const scaleY = activeTemplate.h / originalImageObject.height;
        const scale = Math.max(scaleX, scaleY); 
        composition.scale = scale;
        composition.rotation = 0;
        composition.x = (activeTemplate.w - originalImageObject.width * scale) / 2;
        composition.y = (activeTemplate.h - originalImageObject.height * scale) / 2;
        updateTransformInputs();
        drawComposition();
    }
    
    function updateTransformInputs() {
        transScaleInput.value = composition.scale;
        transRotateInput.value = composition.rotation;
        const sVal = document.getElementById('trans-scale-value');
        const rVal = document.getElementById('trans-rotate-value');
        if(sVal) sVal.textContent = parseFloat(composition.scale).toFixed(2);
        if(rVal) rVal.textContent = composition.rotation;
    }

    function drawComposition() {
        originalCtx.clearRect(0, 0, originalCanvas.width, originalCanvas.height);
        originalCtx.fillStyle = 'rgba(255, 255, 255, 1)'; 
        originalCtx.fillRect(0,0, originalCanvas.width, originalCanvas.height);
        
        if (!originalImageObject) return;

        originalCtx.save();
        
        const s = getEditorScale();
        originalCtx.scale(s, s); 

        const imgW = originalImageObject.width * composition.scale;
        const imgH = originalImageObject.height * composition.scale;
        const centerX = composition.x + imgW / 2;
        const centerY = composition.y + imgH / 2;

        originalCtx.translate(centerX, centerY);
        originalCtx.rotate(composition.rotation * Math.PI / 180);
        originalCtx.drawImage(originalImageObject, -imgW / 2, -imgH / 2, imgW, imgH);
        
        originalCtx.strokeStyle = '#007bff';
        originalCtx.lineWidth = 1 / s; 
        originalCtx.strokeRect(-imgW / 2, -imgH / 2, imgW, imgH);

        const finalHandleSize = 8; 
        originalCtx.fillStyle = '#fff';
        originalCtx.lineWidth = 1.5 / s;

        const corners = [{ x: -imgW/2, y: -imgH/2 }, { x: imgW/2, y: -imgH/2 }, { x: imgW/2, y: imgH/2 }, { x: -imgW/2, y: imgH/2 }];
        corners.forEach(c => {
            originalCtx.fillRect(c.x - finalHandleSize/2, c.y - finalHandleSize/2, finalHandleSize, finalHandleSize);
            originalCtx.strokeRect(c.x - finalHandleSize/2, c.y - finalHandleSize/2, finalHandleSize, finalHandleSize);
        });

        originalCtx.restore();
    }

    // --- INTERACCIÓN MOUSE ---
    function getCanvasCoords(e) {
        const rect = originalCanvas.getBoundingClientRect();
        const scaleX = activeTemplate.w / rect.width;
        const scaleY = activeTemplate.h / rect.height;
        return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
    }

    function getHitHandle(mx, my) {
        if (!originalImageObject) return null;
        const imgW = originalImageObject.width * composition.scale;
        const imgH = originalImageObject.height * composition.scale;
        const centerX = composition.x + imgW / 2;
        const centerY = composition.y + imgH / 2;
        const rad = -composition.rotation * Math.PI / 180;
        const dx = mx - centerX;
        const dy = my - centerY;
        const rX = dx * Math.cos(rad) - dy * Math.sin(rad);
        const rY = dx * Math.sin(rad) + dy * Math.cos(rad);
        const margin = 10; 
        if (Math.abs(rX - (-imgW/2)) < margin && Math.abs(rY - (-imgH/2)) < margin) return 'nw';
        if (Math.abs(rX - (imgW/2)) < margin && Math.abs(rY - (-imgH/2)) < margin) return 'ne';
        if (Math.abs(rX - (imgW/2)) < margin && Math.abs(rY - (imgH/2)) < margin) return 'se';
        if (Math.abs(rX - (-imgW/2)) < margin && Math.abs(rY - (imgH/2)) < margin) return 'sw';
        return null;
    }

    originalCanvas.addEventListener('mousedown', (e) => {
        if (!originalImageObject) return;
        const coords = getCanvasCoords(e);
        const handle = getHitHandle(coords.x, coords.y);
        if (handle) { isResizing = true; resizeHandle = handle; originalCanvas.style.cursor = 'crosshair'; } 
        else { isDragging = true; originalCanvas.style.cursor = 'grabbing'; }
        lastMousePos = coords; 
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging && !isResizing) return;
        const rect = originalCanvas.getBoundingClientRect();
        const scaleX = activeTemplate.w / rect.width; 
        const scaleY = activeTemplate.h / rect.height; 
        const currX = (e.clientX - rect.left) * scaleX;
        const currY = (e.clientY - rect.top) * scaleY;
        const dx = currX - lastMousePos.x;
        const dy = currY - lastMousePos.y;

        if (isDragging) { composition.x += dx; composition.y += dy; } 
        else if (isResizing) {
            let delta = 0;
            if (resizeHandle === 'se') delta = dx + dy; if (resizeHandle === 'sw') delta = -dx + dy;
            if (resizeHandle === 'ne') delta = dx - dy; if (resizeHandle === 'nw') delta = -dx - dy;
            const factor = delta * 0.005; 
            const newScale = Math.max(0.01, composition.scale + factor);
            const oldW = originalImageObject.width * composition.scale;
            const newW = originalImageObject.width * newScale;
            const diffW = newW - oldW;
            const diffH = (originalImageObject.height * newScale) - (originalImageObject.height * composition.scale);
            composition.scale = newScale; composition.x -= diffW / 2; composition.y -= diffH / 2;
        }
        lastMousePos = { x: currX, y: currY };
        updateTransformInputs();
        drawComposition();
    });

    window.addEventListener('mouseup', () => { isDragging = false; isResizing = false; resizeHandle = null; originalCanvas.style.cursor = 'default'; });
    originalCanvas.addEventListener('mousemove', (e) => {
        if (isDragging || isResizing) return;
        const coords = getCanvasCoords(e);
        const handle = getHitHandle(coords.x, coords.y);
        if (handle) { if (handle === 'nw' || handle === 'se') originalCanvas.style.cursor = 'nwse-resize'; else originalCanvas.style.cursor = 'nesw-resize'; } 
        else { originalCanvas.style.cursor = 'grab'; }
    });

    // --- AUTO-GENERATE TRIGGER ---
    function triggerAutoProcess() {
        if (autoProcessCheck.checked) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(processImageClientSide, 300); 
        }
    }

    transScaleInput.addEventListener('input', () => {
        composition.scale = parseFloat(transScaleInput.value);
        updateTransformInputs();
        drawComposition();
        triggerAutoProcess();
    });
    transRotateInput.addEventListener('input', () => {
        composition.rotation = parseInt(transRotateInput.value);
        updateTransformInputs();
        drawComposition();
        triggerAutoProcess();
    });
    fitScreenBtn.addEventListener('click', fitImageToTemplate);


    // --- PROCESAMIENTO PRINCIPAL (Versión Estable) ---
    const processImageClientSide = async () => {
        if (!originalImageObject) return;
        loader.classList.remove('hidden');
        processBtn.disabled = true;
        downloadBtn.disabled = true;
        document.body.style.cursor = 'wait';

        try {
            await new Promise(resolve => setTimeout(resolve, 10));
            const controls = getControlValues();
            
            // Crear canvas del tamaño del template
            let tempCanvas = document.createElement('canvas');
            let tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = activeTemplate.w;
            tempCanvas.height = activeTemplate.h;
            
            tempCtx.fillStyle = '#ffffff';
            tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

            // Filtros CSS
            tempCtx.filter = `brightness(${100 + controls.brightness / 1.5}%) contrast(${100 + controls.contrast}%) saturate(${100 + controls.saturation}%) hue-rotate(${controls.hue}deg) blur(${controls.blur_sharpen > 0 ? controls.blur_sharpen / 25 : 0}px)`;

            tempCtx.save();
            const imgCenterX = composition.x + (originalImageObject.width * composition.scale) / 2;
            const imgCenterY = composition.y + (originalImageObject.height * composition.scale) / 2;
            tempCtx.translate(imgCenterX, imgCenterY);
            tempCtx.rotate(composition.rotation * Math.PI / 180);
            tempCtx.scale(composition.scale, composition.scale);
            tempCtx.drawImage(originalImageObject, -originalImageObject.width / 2, -originalImageObject.height / 2);
            tempCtx.restore();
            tempCtx.filter = 'none';

            let imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);

            // Post-Procesamiento Píxeles (Opacidad)
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] > 0) data[i + 3] = 255; 
                else { data[i] = 255; data[i + 1] = 255; data[i + 2] = 255; data[i + 3] = 255; }
            }

            // Filtros JS
            if (controls.blur_sharpen < 0) {
                applySharpen(imageData, Math.abs(controls.blur_sharpen) / 50); 
            }
            if (controls.dithering > 0) {
                applyDithering(imageData, controls.dithering / 100);
            }
            
            lastFilteredImageData = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width);

            processedCanvas.width = activeTemplate.w;
            processedCanvas.height = activeTemplate.h;
            
            if(viewZoomInputs.length > 0) updateViewZoom(viewZoomInputs[0].value);
            
            if (isInitialProcessing) {
                const discoveryResult = mapImageToDMCPalette(new ImageData(new Uint8ClampedArray(imageData.data), imageData.width), 30);
                masterPalette = discoveryResult.palette;
                manuallyRemovedColors.clear();
                numColorsSlider.max = masterPalette.length > 1 ? masterPalette.length : 2;
                numColorsSlider.value = Math.min(parseInt(numColorsSlider.value), masterPalette.length);
                isInitialProcessing = false;
            }

            // Reset Highlight visual, pero mantener si está el check
            updateHighlight();
            
            updateActivePaletteAndRemap();
            
            history = [];
            historyIndex = -1;
            saveState();
            downloadBtn.disabled = false;

        } catch (error) {
            console.error(error);
            alert("Error processing image.");
        } finally {
            loader.classList.add('hidden');
            processBtn.disabled = false;
            document.body.style.cursor = 'default';
        }
    };
    processBtn.addEventListener('click', processImageClientSide);

    // --- HIGHLIGHT LOGIC ---
    function updateHighlight() {
        // Revisar si alguno de los checkboxes está activo
        let isActive = false;
        highlightChecks.forEach(c => { if(c.checked) isActive = true; });
        
        if (isActive && activeColorValue) {
            const rgb = activeColorValue.match(/\d+/g).map(Number);
            highlightedColor = { r: rgb[0], g: rgb[1], b: rgb[2] };
        } else {
            highlightedColor = null;
        }
    }

    // Sincronizar checkboxes
    highlightChecks.forEach(check => {
        check.addEventListener('change', (e) => {
            const val = e.target.checked;
            highlightChecks.forEach(c => c.checked = val); // Sincronizar todos
            updateHighlight();
            renderProcessedOutput();
        });
    });

    function renderProcessedOutput() {
        if (!currentProcessedData) return;
        const renderData = new ImageData(new Uint8ClampedArray(currentProcessedData.data), currentProcessedData.width, currentProcessedData.height);

        if (highlightedColor) {
            const d = renderData.data;
            const tR = highlightedColor.r, tG = highlightedColor.g, tB = highlightedColor.b;
            for (let i = 0; i < d.length; i += 4) {
                const r = d[i], g = d[i+1], b = d[i+2];
                if (r === tR && g === tG && b === tB) continue;
                else { d[i] = Math.floor(r*0.15); d[i+1] = Math.floor(g*0.15); d[i+2] = Math.floor(b*0.15); }
            }
        }
        processedCtx.putImageData(renderData, 0, 0);
    }

    function updateActivePaletteAndRemap() {
        const numColors = parseInt(numColorsSlider.value, 10);
        const availablePalette = masterPalette.filter(c => !manuallyRemovedColors.has(c));
        activePalette = availablePalette.slice(0, numColors);
        const activeSet = new Set(activePalette);
        removedColors = masterPalette.filter(c => !activeSet.has(c));
        
        const imageDataForMapping = new ImageData(new Uint8ClampedArray(lastFilteredImageData.data), lastFilteredImageData.width);
        
        const finalActivePaletteObjects = activePalette.map(c => {
            const [r, g, b] = (colorMap[c] || c).match(/\d+/g).map(Number);
            return { r, g, b };
        });
        
        const finalImageData = mapToGivenPalette(imageDataForMapping, finalActivePaletteObjects);
        currentProcessedData = finalImageData;
        renderProcessedOutput();
        
        displayActivePalette();
        displayRemovedColors();
    }
    
    // --- ALGORITMOS PALETA ---
    function mapImageToDMCPalette(imageData, maxColors) {
        const algo = document.getElementById('algo-select').value;
        if (algo === 'kmeans') return quantizeKMeans(imageData, maxColors);
        else return quantizeFrequency(imageData, maxColors);
    }

    function quantizeFrequency(imageData, maxColors) {
        const data = imageData.data;
        const dmcCounts = {};
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] === 0) continue; 
            const closestDMC = findClosestColorInPalette(data[i], data[i + 1], data[i + 2], DMC_PALETTE);
            const key = `${closestDMC.r},${closestDMC.g},${closestDMC.b}`;
            dmcCounts[key] = (dmcCounts[key] || 0) + 1;
        }
        let workingPalette = Object.keys(dmcCounts).map(key => {
            const [r, g, b] = key.split(',').map(Number);
            return { r, g, b, count: dmcCounts[key] };
        });
        workingPalette.sort((a, b) => b.count - a.count);
        workingPalette = workingPalette.slice(0, maxColors);
        return { palette: workingPalette.map(c => `rgb(${c.r}, ${c.g}, ${c.b})`) };
    }

    function quantizeKMeans(imageData, maxColors) {
        const data = imageData.data;
        const pixels = [];
        const step = 4 * 10; 
        for (let i = 0; i < data.length; i += step) {
            if (data[i + 3] < 128) continue;
            pixels.push({ r: data[i], g: data[i+1], b: data[i+2] });
        }
        if (pixels.length === 0) return { palette: [] };
        
        let centroids = [];
        for (let i = 0; i < maxColors; i++) { centroids.push(pixels[Math.floor(Math.random() * pixels.length)]); }

        for (let iter = 0; iter < 5; iter++) {
            const clusters = new Array(maxColors).fill(0).map(() => ({ r:0, g:0, b:0, count:0 }));
            for (let p of pixels) {
                let minDist = Infinity; let clusterIndex = 0;
                for (let j = 0; j < centroids.length; j++) {
                    const d = (p.r - centroids[j].r)**2 + (p.g - centroids[j].g)**2 + (p.b - centroids[j].b)**2;
                    if (d < minDist) { minDist = d; clusterIndex = j; }
                }
                clusters[clusterIndex].r += p.r; clusters[clusterIndex].g += p.g; clusters[clusterIndex].b += p.b; clusters[clusterIndex].count++;
            }
            for (let j = 0; j < maxColors; j++) {
                if (clusters[j].count > 0) {
                    centroids[j] = { r: Math.round(clusters[j].r / clusters[j].count), g: Math.round(clusters[j].g / clusters[j].count), b: Math.round(clusters[j].b / clusters[j].count) };
                }
            }
        }
        const finalPaletteSet = new Set();
        centroids.forEach(c => {
            const closestDMC = findClosestColorInPalette(c.r, c.g, c.b, DMC_PALETTE);
            finalPaletteSet.add(`rgb(${closestDMC.r}, ${closestDMC.g}, ${closestDMC.b})`);
        });
        return { palette: Array.from(finalPaletteSet) };
    }

    function mapToGivenPalette(imageData, paletteObjects) {
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] === 0) continue;
            const originalColorStr = `rgb(${data[i]}, ${data[i+1]}, ${data[i+2]})`;
            const swappedColor = colorMap[originalColorStr];
            let finalColor;
            if (swappedColor) {
                finalColor = swappedColor.match(/\d+/g).map(Number);
            } else {
                 const closest = findClosestColorInPalette(data[i], data[i + 1], data[i + 2], paletteObjects);
                 finalColor = [closest.r, closest.g, closest.b];
            }
            data[i] = finalColor[0]; data[i + 1] = finalColor[1]; data[i + 2] = finalColor[2]; data[i + 3] = 255; 
        }
        return imageData;
    }

    function saveState() {
        if (processedCanvas.width === 0 || processedCanvas.height === 0) return;
        if (historyIndex < history.length - 1) { history = history.slice(0, historyIndex + 1); }
        history.push(processedCtx.getImageData(0, 0, processedCanvas.width, processedCanvas.height));
        historyIndex++; updateUndoRedoButtons();
    }
    function undo() { if (historyIndex > 0) { historyIndex--; processedCtx.putImageData(history[historyIndex], 0, 0); updateUndoRedoButtons(); } }
    function redo() { if (historyIndex < history.length - 1) { historyIndex++; processedCtx.putImageData(history[historyIndex], 0, 0); updateUndoRedoButtons(); } }
    function updateUndoRedoButtons() { undoBtn.disabled = historyIndex <= 0; redoBtn.disabled = historyIndex >= history.length - 1; }
    undoBtn.addEventListener('click', undo); redoBtn.addEventListener('click', redo);

    function setCompareMode(on) {
        let compareMode = on;
        displayArea.classList.toggle('single-view', !on);
        displayArea.classList.toggle('compare-view', on);
        if (on) {
            headerSingle.style.display = 'none';
            headerCompare.classList.add('visible');
            headerCompare.classList.remove('hidden');
            processedCanvas.classList.add('visible');
            originalCanvas.classList.add('visible');
            processedCanvas.style.pointerEvents = 'auto';
            originalCanvas.style.pointerEvents = 'auto';
        } else {
            headerSingle.style.display = 'flex';
            headerCompare.classList.remove('visible');
            headerCompare.classList.add('hidden');
            processedCanvas.classList.add('visible');
        }
    }

    function toggleCompare() { 
        const isCompare = displayArea.classList.contains('compare-view');
        setCompareMode(!isCompare); 
    }
    if(compareBtn) compareBtn.addEventListener('click', toggleCompare);
    if(compareBtn2) compareBtn2.addEventListener('click', toggleCompare);

    const toolbar = document.getElementById('toolbar');
    let activeTool = 'pencil'; let isDrawing = false; let activeColor = 'rgb(0, 0, 0)';
    
    function setActiveColor(color) {
        activeColor = color;
        activeColorValue = color; // Guardar valor texto para highlight
        activeColorSwatches.forEach(swatch => { swatch.style.backgroundColor = color; });
        
        // Si highlight está activo, actualizar vista
        updateHighlight();
        renderProcessedOutput();
    }

    toolbar.addEventListener('click', e => {
        if (e.target.classList.contains('tool-btn') && e.target.dataset.tool) {
            toolbar.querySelector('.active[data-tool]')?.classList.remove('active');
            e.target.classList.add('active');
            activeTool = e.target.dataset.tool;
        }
    });

    paletteContainer.addEventListener('click', e => {
        if (e.target.classList.contains('color-swatch')) {
            setActiveColor(e.target.style.backgroundColor);
        }
    });

    const getMousePos = (canvas, evt) => {
        const rect = canvas.getBoundingClientRect();
        return {
            x: (evt.clientX - rect.left) * (canvas.width / rect.width),
            y: (evt.clientY - rect.top) * (canvas.height / rect.height)
        };
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const pos = getMousePos(processedCanvas, e);
        if (activeTool === 'pencil') {
            processedCtx.fillStyle = activeColor;
            processedCtx.fillRect(Math.floor(pos.x), Math.floor(pos.y), 1, 1);
        } else if (activeTool === 'eyedropper') {
             const pixelData = processedCtx.getImageData(Math.floor(pos.x), Math.floor(pos.y), 1, 1).data;
             setActiveColor(`rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`);
        }
    };

    processedCanvas.addEventListener('mousedown', e => {
        if (e.button !== 0) return;
        if (activeTool === 'bucket') {
            const pos = getMousePos(processedCanvas, e);
            paintBucketFill(Math.floor(pos.x), Math.floor(pos.y));
        } else {
            isDrawing = true;
            draw(e);
        }
    });
    processedCanvas.addEventListener('mousemove', draw);
    processedCanvas.addEventListener('mouseup', e => { if (e.button !== 0 || !isDrawing) return; isDrawing = false; saveState(); });
    processedCanvas.addEventListener('mouseout', () => { if (isDrawing) { isDrawing = false; saveState(); } });
    processedCanvas.addEventListener('click', e => { if (activeTool === 'eyedropper') draw(e); });

    function paintBucketFill(startX, startY) {
        const imageData = processedCtx.getImageData(0, 0, processedCanvas.width, processedCanvas.height);
        const { data, width, height } = imageData;
        const startIdx = (startY * width + startX) * 4;
        const targetColor = [data[startIdx], data[startIdx + 1], data[startIdx + 2]];
        const replacementColorRgb = activeColor.match(/\d+/g).map(Number);
        if (targetColor.every((val, i) => val === replacementColorRgb[i])) return;

        if (contiguousCheck.checked) {
            const queue = [[startX, startY]];
            const visited = new Set([`${startX},${startY}`]);
            while (queue.length > 0) {
                const [x, y] = queue.shift();
                const idx = (y * width + x) * 4;
                data[idx] = replacementColorRgb[0]; data[idx + 1] = replacementColorRgb[1]; data[idx + 2] = replacementColorRgb[2];
                [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]].forEach(([nx, ny]) => {
                    const nKey = `${nx},${ny}`;
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited.has(nKey)) {
                        const nIdx = (ny * width + nx) * 4;
                        if (data[nIdx] === targetColor[0] && data[nIdx + 1] === targetColor[1] && data[nIdx + 2] === targetColor[2]) {
                            queue.push([nx, ny]); visited.add(nKey);
                        }
                    }
                });
            }
        } else {
            for (let i = 0; i < data.length; i += 4) {
                if (data[i] === targetColor[0] && data[i + 1] === targetColor[1] && data[i + 2] === targetColor[2]) {
                    data[i] = replacementColorRgb[0]; data[i + 1] = replacementColorRgb[1]; data[i + 2] = replacementColorRgb[2];
                }
            }
        }
        processedCtx.putImageData(imageData, 0, 0);
        saveState();
    }
    
    function getControlValues() {
        const values = {};
        document.querySelectorAll('#adjustments input').forEach(input => {
            const key = input.id.replace(/-/g, '_');
            if (input.type === 'checkbox') values[key] = input.checked;
            else if (input.type === 'range') values[key] = parseInt(input.value, 10);
        });
        return values;
    }
    
    document.querySelectorAll('.auto-trigger').forEach(control => {
        control.addEventListener('input', () => {
            const valueSpan = document.getElementById(`${control.id}-value`);
            if (valueSpan) valueSpan.textContent = control.value;
            if (control.id === 'num-colors') {
                 clearTimeout(debounceTimer);
                 debounceTimer = setTimeout(() => { if (masterPalette.length > 0) { updateActivePaletteAndRemap(); } }, 50);
            } else if (autoProcessCheck.checked) {
                isInitialProcessing = true; clearTimeout(debounceTimer); debounceTimer = setTimeout(processImageClientSide, 300);
            }
        });
    });

    function colorDistance(c1, c2) { return (c1.r - c2.r) ** 2 + (c1.g - c2.g) ** 2 + (c1.b - c2.b) ** 2; }
    function findClosestColorInPalette(r, g, b, palette) {
        if (!palette || palette.length === 0) return { r: 0, g: 0, b: 0 };
        let closest = palette[0], minDist = colorDistance({ r, g, b }, closest);
        for (let i = 1; i < palette.length; i++) { const dist = colorDistance({ r, g, b }, palette[i]); if (dist < minDist) { minDist = dist; closest = palette[i]; } }
        return closest;
    }
    function createSwatch(colorString) { const swatch = document.createElement('div'); swatch.className = 'color-swatch'; swatch.style.backgroundColor = colorString; swatch.dataset.color = colorString; swatch.title = colorString; return swatch; }
    function displayActivePalette() {
        paletteContainer.innerHTML = ''; document.getElementById('active-palette-title').textContent = `Resulting Color Palette (${activePalette.length})`;
        activePalette.forEach(colorString => { const finalColor = colorMap[colorString] || colorString; const swatch = createSwatch(finalColor); swatch.dataset.originalColor = colorString; paletteContainer.appendChild(swatch); });
        if (activePalette.length > 0) { setActiveColor(colorMap[activePalette[0]] || activePalette[0]); }
    }
    function displayRemovedColors() { removedColorsContainer.innerHTML = ''; document.getElementById('removed-palette-title').textContent = `Removed Colors (${removedColors.length})`; removedColors.forEach(colorString => { const swatch = createSwatch(colorString); removedColorsContainer.appendChild(swatch); }); }
    function displaySuggestions() {
        suggestionsContainer.innerHTML = ''; if (!suggestionTargetColor) { document.getElementById('suggestions-title').textContent = 'Suggestions'; return; }
        document.getElementById('suggestions-title').textContent = `Suggestions for ${suggestionTargetColor}`;
        const targetRgb = suggestionTargetColor.match(/\d+/g).map(Number); const targetObj = {r: targetRgb[0], g: targetRgb[1], b: targetRgb[2]};
        const suggestions = DMC_PALETTE.map(c => ({ color: c, dist: colorDistance(targetObj, c) })).sort((a, b) => a.dist - b.dist).slice(1, 11).map(item => `rgb(${item.color.r}, ${item.color.g}, ${item.color.b})`);
        suggestions.forEach(colorString => { const swatch = createSwatch(colorString); suggestionsContainer.appendChild(swatch); });
    }

    paletteContainer.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const swatch = e.target.closest('.color-swatch');
        if (!swatch) return;
        contextMenu.style.top = `${e.pageY}px`;
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.classList.remove('hidden');
        contextMenu.dataset.activeColor = swatch.dataset.originalColor;
        contextMenu.dataset.resolvedColor = swatch.style.backgroundColor;
    });

    document.addEventListener('click', () => { contextMenu.classList.add('hidden'); });

    contextMenu.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        const color = contextMenu.dataset.activeColor;
        if (!action || !color) return;
        
        switch (action) {
            case 'set-active': setActiveColor(colorMap[color] || color); break;
            case 'show-suggestions': suggestionTargetColor = color; displaySuggestions(); break;
            case 'remove-color':
                if (masterPalette.filter(c => !manuallyRemovedColors.has(c)).length > 2) {
                    manuallyRemovedColors.add(color);
                    const newCount = parseInt(numColorsSlider.value, 10) - 1;
                    numColorsSlider.value = newCount > 1 ? newCount : 2;
                    document.getElementById('num-colors-value').textContent = numColorsSlider.value;
                    updateActivePaletteAndRemap();
                }
                break;
        }
    });
    
    removedColorsContainer.addEventListener('click', (e) => { const swatch = e.target.closest('.color-swatch'); if (!swatch) return; const colorToRestore = swatch.dataset.color; if (manuallyRemovedColors.has(colorToRestore)) { manuallyRemovedColors.delete(colorToRestore); } const newCount = Math.min(parseInt(numColorsSlider.value, 10) + 1, masterPalette.length); numColorsSlider.value = newCount; document.getElementById('num-colors-value').textContent = newCount; updateActivePaletteAndRemap(); });
    suggestionsContainer.addEventListener('click', (e) => { const swatch = e.target.closest('.color-swatch'); if (!swatch || !suggestionTargetColor) return; const newColor = swatch.dataset.color; colorMap[suggestionTargetColor] = newColor; suggestionTargetColor = null; suggestionsContainer.innerHTML = ''; document.getElementById('suggestions-title').textContent = 'Suggestions'; updateActivePaletteAndRemap(); });

    function applySharpen(imageData, strength) { const { data, width, height } = imageData; const temp = new Uint8ClampedArray(data); const kernel = [[0, -1, 0], [-1, 5, -1], [0, -1, 0]]; for (let y = 1; y < height - 1; y++) { for (let x = 1; x < width - 1; x++) { let r = 0, g = 0, b = 0; for (let ky = -1; ky <= 1; ky++) { for (let kx = -1; kx <= 1; kx++) { const i = ((y + ky) * width + (x + kx)) * 4; const w = kernel[ky + 1][kx + 1]; r += temp[i] * w; g += temp[i + 1] * w; b += temp[i + 2] * w; } } const outI = (y * width + x) * 4; data[outI] = data[outI] * (1 - strength) + r * strength; data[outI + 1] = data[outI + 1] * (1 - strength) + g * strength; data[outI + 2] = data[outI + 2] * (1 - strength) + b * strength; } } }
    function applyDithering(imageData, strength) { const { data, width, height } = imageData; const matrix = BAYER_MATRIX_4X4; const size = 4; const factor = 255 / (size * size); for (let y = 0; y < height; y++) { for (let x = 0; x < width; x++) { const i = (y * width + x) * 4; const threshold = matrix[y % size][x % size]; const adj = (threshold - (size * size / 2)) * factor * strength * 2; data[i] = Math.max(0, Math.min(255, data[i] + adj)); data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + adj)); data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + adj)); } } }

    downloadBtn.addEventListener('click', () => { if (!processedCanvas || processedCanvas.width === 0) return; const link = document.createElement('a'); link.download = 'diamond-painting-template.png'; link.href = processedCanvas.toDataURL('image/png'); link.click(); });
});