from PIL import Image
import pathlib

# Change this if your images are in a different folder
STATIC_IMAGES_DIR = pathlib.Path("static/images")

# File types to convert
EXTENSIONS = [".jpg", ".jpeg", ".png"]

def convert_images():
    for path in STATIC_IMAGES_DIR.rglob("*"):
        if path.suffix.lower() in EXTENSIONS:
            output_path = path.with_suffix(".webp")
            try:
                img = Image.open(path).convert("RGB")
                img.save(output_path, "WEBP", quality=80, method=6)
                print(f"✅ Converted {path} → {output_path}")
            except Exception as e:
                print(f"❌ Skipped {path}: {e}")

if __name__ == "__main__":
    convert_images()
    print("🎉 Done converting all images to WebP!")