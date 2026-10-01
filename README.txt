SETUP (one time)
1. Deploy THIS whole folder to Netlify (index.html + netlify/functions + package.json).
   Best: Netlify CLI ("netlify deploy --prod") or connect a GitHub repo.
   (Plain drag-and-drop may not install the @netlify/blobs package.)
2. Netlify > Site configuration > Environment variables > add  EDIT_PASSWORD = your secret password
   Then redeploy once.
3. Open the site, click the small pencil (bottom-left), enter the password.
   Click "Edit" on any provider card (or any name in the weekly matrix), change, "Save for everyone".
Everyone with the link sees changes on next load (open tabs refresh within ~1 minute).
