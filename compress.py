import os
from PIL import Image

# Define the folder path
PUBLIC_FOLDER = "public"  # Adjust this if needed
OUTPUT_QUALITY = 85  # Adjust the quality for JPEG compression (0-100)
MAX_WIDTH = 1200  # Maximum width for images
MAX_HEIGHT = 1200  # Maximum height for images

def compress_image(image_path):
    """Compress and resize an image in place."""
    temp_path = None
    try:
        # Get original file size
        original_size = os.path.getsize(image_path)

        with Image.open(image_path) as img:
            img_format = img.format  # Preserve the original format

            # Only convert RGBA to RGB for JPEGs, preserve transparency for PNGs
            if img_format in ["JPEG", "JPG"] and img.mode in ("P", "RGBA"):
                img = img.convert("RGB")

            # Resize image if it's too large
            if img.width > MAX_WIDTH or img.height > MAX_HEIGHT:
                # Use LANCZOS for RGB images, LANCZOS for RGBA to preserve transparency
                img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.LANCZOS)

            # Create a temporary path for the new image
            temp_path = image_path + ".temp"

            # Save with compression
            if img_format in ["JPEG", "JPG"]:
                img.save(temp_path, "JPEG", quality=OUTPUT_QUALITY, optimize=True)
            elif img_format == "PNG":
                # For PNGs, preserve the original mode (RGBA for transparency)
                img.save(temp_path, "PNG", optimize=True)

            # Check if the new file is actually smaller
            new_size = os.path.getsize(temp_path)
            
            if new_size < original_size:
                os.replace(temp_path, image_path)
                print(f"Compressed {image_path}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB")
            else:
                os.remove(temp_path)
                print(f"Skipped {image_path}: New size would be larger")

    except Exception as e:
        print(f"Failed to process {image_path}: {e}")
        if temp_path and os.path.exists(temp_path):
            os.remove(temp_path)
        return  # Skip this file and continue with the rest

def process_folder(folder_path):
    """Recursively process all images in the folder."""
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith((".png", ".jpg", ".jpeg")):
                file_path = os.path.join(root, file)
                compress_image(file_path)

if __name__ == "__main__":
    process_folder(PUBLIC_FOLDER)
    print("Image compression complete!")
