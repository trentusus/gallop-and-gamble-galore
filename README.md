# Gallop and Gamble Galore

Welcome to **Gallop and Gamble Galore** — a Snowplow Sales Engineering Demo application built with **Lovable**, showcasing behavioral data tracking, modeling, and fraud detection capabilities.

---

## Project links

- **Web application**: [Lovable Project](https://lovable.dev/projects/40c2c38a-33a5-4456-b6a7-148f7d59fe4f)
- **GitHub repository**: [View on GitHub](https://github.com/trentusus/gallop-and-gamble-galore)
- **Data product**: [Snowplow Console Data Product](https://console.snowplowanalytics.com/b12539df-a711-42bd-bdfa-175308c55fd5/data-products/abecc3d9-dab3-4500-a1b8-d4db8854b0c9)

---

## Demo resources

- **Demo guide and talk track**: [View the document](https://docs.google.com/document/d/1G-WmR8TR4UVr5dezznSgeKCEBpbH9PqVfar7GE2mR9g/edit?tab=t.0)
- **Presentation recording**: [Watch on Gong](https://us-15499.app.gong.io/call?id=4631541662640845937)

---

## How can I edit this code?

You can modify the application in several ways:

### **Use Lovable**

Go to the [Lovable Project](https://lovable.dev/projects/40c2c38a-33a5-4456-b6a7-148f7d59fe4f) and start prompting.  
Changes made through Lovable are automatically committed to this repository.

### **Use your preferred IDE**

To work locally using your own IDE:

1. Clone the repository:
   ```sh
   git clone <YOUR_GIT_URL>
   ```

2. Navigate to the project folder:
   ```sh
   cd <YOUR_PROJECT_NAME>
   ```

3. Install dependencies:
   ```sh
   npm i
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

Make sure Node.js and npm are installed. You can use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install Node.js.

### **Edit directly on GitHub**

- Open the file you want to edit
- Click the **"Edit"** (pencil) icon
- Make your changes and commit

### **Use GitHub Codespaces**

- Go to the repository’s main page
- Click **"Code"**, then **"Codespaces"**
- Create a new codespace
- Edit files and commit changes in-browser

---

## Tech stack

This application uses:

- **Vite**
- **TypeScript**
- **React**
- **shadcn-ui**
- **Tailwind CSS**

---

## How to deploy

To publish the app:

1. Open [Lovable](https://lovable.dev/projects/40c2c38a-33a5-4456-b6a7-148f7d59fe4f)
2. Click **"Share"**
3. Click **"Publish"**

---

## Connect a custom domain

To link a custom domain:

1. Go to **Project > Settings > Domains**
2. Click **"Connect Domain"**

For full guidance, see [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

## Snowplow tracking overview

This demo app integrates Snowplow to demonstrate behavioral tracking, conversion modeling, and fraud detection in a web-based betting scenario.

### Use cases

- **User journey tracking**: Visualize user navigation and engagement
- **Conversion analysis**: Analyze when and how users place bets, including total wagered amounts
- **Fraud detection**:
  - Repeated identical screen clicks indicating automated activity
  - Abnormally fast or slow bet placements as possible fraud signals

### Tracking scenario

1. User visits the site
2. User browses and places a bet

Snowplow captures:
- **Standard events**
- **Custom Entities**: `race`, `bet`
- **Modeled data**: Passed through the **unified model**

### Snowplow features in use

- **Data Products**
- **Snowtype**
- **Snowplow Unified Digital dbt model for Databricks**
- **Unified model passthroughs**
- **Session-based conversion modeling**

---

## Future additions

Planned enhancements include:

- Banner ads
- Marketing affiliate tracking
