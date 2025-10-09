
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## 📋 Prerequisites

Before cloning this repository, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**
- **Git LFS** (Large File Storage) - Required for large asset files

## 🚀 Getting Started

### 1. Install Git LFS

This project uses Git LFS to manage large files. You must install it before cloning.

**Windows:**
- Download from [git-lfs.github.com](https://git-lfs.github.com/)
- Run the installer
- Open a new terminal/PowerShell window

**Mac:**
```bash
brew install git-lfs

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/logical-programs-frontend.git
cd logical-programs-frontend
```

### 3. Verify LFS Files

Check that large files were downloaded correctly:
```bash
git lfs ls-files
```

You should see `Angular-boilerplate.zip` listed (144 MB).

**Verify file size:**
```bash
# Windows PowerShell
dir src\assets\Angular-boilerplate.zip

# Mac/Linux
ls -lh src/assets/Angular-boilerplate.zip
```

If the file is only ~130 bytes, LFS files weren't downloaded. Run:
```bash
git lfs pull
```

### 4. Install Dependencies
```bash
npm install
