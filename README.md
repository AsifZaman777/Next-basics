# Next JS Basics

### Create Next App

```bash
npx create-next-app@latest
```

### Project structure

```bash
app
|
|--global.css
|--layout.tsx
|--page.tsx

public
|
|--assets

other config files
...
```

The `app` folder is responsible for the file based routing. In the `app` directory `layout` is responsible to call a page dynamically using `{children}`.

### Routing and Navigation in Next.js

```bash
app/
├── users/
│   ├── page.tsx
│   ├── new/
│   │   ├── page.tsx
│
├── global.css
├── layout.tsx
├── page.tsx

public/
├── assets/

Other config files...
```

#### Next.js Routing Conventions:

- Next.js follows **file-based routing**, not configuration-based routing like `react router`.
- Every folder inside the `app/` directory should contain a `page.tsx` file to be a valid route.
- Multiple `page.tsx` files in the same directory will cause a conflict and result in an error.
- Multiple files in another extentions `css,js,...` can not be accessible through route
- Folder and file names should be **lowercase** for consistency.
- Nested routes are created by placing `page.tsx` inside subfolders (e.g., `app/users/new/page.tsx` maps to `/users/new`).

---

#### Navigation

| **Link (Next.js)**                                                                       | **Anchor (HTML)**                                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `<Link href="/users/new">Users with Link</Link>`                                         | `<a href="./users/new">Users with anchor</a>`                                              |
| Only file content is being downloaded                                                    | Every assets is being redownloaded                                                         |
| ![link](https://github.com/user-attachments/assets/c00b0f81-8c8c-42b5-b7a6-c2c95e4c36e2) | ![anchor](https://github.com/user-attachments/assets/3956919a-0f36-44a8-8a01-87a49a33d23e) |


