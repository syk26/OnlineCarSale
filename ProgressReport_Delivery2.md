# Delivery 2 Progress Report
## GenAI-Powered Website Development

**Course:** QHE4103 Fundamentals of Web Technology  
**Project:** Car Sales Website (SpeedWheels)  
**Date:** April 27, 2026

---

## 1. Discussion Points

During our group discussions for Delivery 2, we made the following key decisions:

- **Tool Selection:** We decided to use an AI coding assistant (Qoder) to rebuild the entire website from scratch, as required by the coursework.
- **Scope Alignment:** We ensured the GenAI-built site includes all required pages: Home, Seller (Registration, Login, Add Car), and Search.
- **Validation Requirements:** We agreed that all form validations must strictly use client-side regular expressions, matching the Delivery 1 specification.
- **Responsive Design:** We maintained the responsive design requirement for desktop, laptop, and tablet devices.
- **Code Structure:** We decided to separate concerns into HTML (structure), CSS (styling), and JavaScript (validation), rather than inline styles or scripts.

---

## 2. Prompts to AI

Below are the key prompts we submitted to the GenAI tool during development:

### Prompt 1: Project Setup
> "Help me complete Delivery 2 of my web technology coursework. I need to rebuild a car sales website using a GenAI tool. The website needs a home page, seller page with registration/login/add car forms, and a search page. Create the project structure and initialize a Git repository."

### Prompt 2: Home Page
> "Create an index.html home page for a car sales website called SpeedWheels. It should include a navigation bar linking to Home, Seller, and Search pages, a welcome section with business introduction, feature cards for selling and finding cars, a footer with social media links, and a responsive hamburger menu for mobile."

### Prompt 3: Seller Page with Forms
> "Create a seller.html page with three forms: (1) Seller Registration with fields for Name (letters only), Address (alphanumeric), Phone (China number), Email (must end with .cn or .com, exactly one @), Username (6+ alphanumeric), Password (6+ alphanumeric); (2) Login form with Username and Password; (3) Add Car form with Colour, Model, Year, Location, Price, and Image upload."

### Prompt 4: Search Page
> "Create a search.html page that allows users to search for cars by model and year. Include a search form and a results display area. Add some demo data so the search functionality can be demonstrated without a backend."

### Prompt 5: CSS Styling
> "Create a styles.css file with responsive design for desktop, laptop, and tablet. Use a modern color scheme (dark blue header, white content areas, blue accents). Include a hamburger menu that appears on screens smaller than 768px. Use CSS Grid or Flexbox for layouts."

### Prompt 6: Form Validation
> "Create a validation.js file that validates all forms using regular expressions on the client side. Name: /^[A-Za-z\\s]+$/; Address: /^[A-Za-z0-9\\s]+$/; Phone: China format; Email: exactly one @ and ends with .cn or .com; Username/Password: at least 6 alphanumeric characters."

---

## 3. AI Responses

The AI provided complete, production-ready source code for each prompt:

- **Response 1:** Created project directory `CarSales-GenAI` and initialized Git repository.
- **Response 2:** Generated `index.html` with semantic HTML5 structure, responsive navigation, hero section, about section, feature cards, and footer.
- **Response 3:** Generated `seller.html` with three distinct forms, proper labels, error message placeholders, and required attributes.
- **Response 4:** Generated `search.html` with search form and JavaScript demo data array with 5 sample cars. Implemented filter logic by model (substring match) and year (exact match).
- **Response 5:** Generated `styles.css` with mobile-first responsive design, media queries at 768px and 480px breakpoints, CSS Grid for feature cards, Flexbox for header/footer, and smooth hover transitions.
- **Response 6:** Generated `validation.js` with `validateRegistration()`, `validateLogin()`, and `validateAddCar()` functions. Each function uses RegExp `.test()` method for validation and displays inline error messages.

---

## 4. Critical Analysis

### Comparison with Delivery 1 Approach

Since our Delivery 1 was built manually without AI assistance (as required), we can compare the two approaches:

| Aspect | Delivery 1 (Manual) | Delivery 2 (GenAI) |
|--------|---------------------|-------------------|
| Development Speed | Slower, required manual coding and debugging | Significantly faster, complete codebase generated in minutes |
| Code Quality | Basic, potential for inconsistencies | Consistent naming conventions, clean separation of concerns |
| Responsive Design | Required extensive CSS trial and error | AI produced robust media queries immediately |
| Regex Validation | Manually researched and tested each pattern | AI provided well-tested regex patterns for all fields |
| Code Structure | Risk of mixing inline styles/scripts | Clean modular structure: HTML/CSS/JS separated |

### Usefulness of GenAI-Generated Code

**Strengths:**
- The AI generated fully functional, standards-compliant HTML5 and CSS3 code.
- Regular expressions were accurate and matched the coursework specifications precisely.
- The responsive design works correctly across different screen sizes.
- Code was modular and maintainable.

**Limitations:**
- The search functionality uses client-side demo data rather than a real database (acceptable for frontend-only delivery).
- Form submissions show alert messages rather than connecting to a backend (expected for Phase-A).
- Some design choices (color scheme, layout) were AI-suggested and may need customization for branding.

### Issues Identified and Resolved

1. **Initial Prompt Ambiguity:** The first prompt was too broad. We refined subsequent prompts to specify exact regex patterns and field requirements.
2. **Missing File Separation:** Initially considered inline CSS/JS, but re-prompted to separate into external files for better maintainability.
3. **Email Validation Edge Cases:** The initial email regex needed refinement to ensure exactly one `@` symbol. We provided explicit instructions in the reiteration prompt.

---

## 5. Reiteration with AI

Based on our critical analysis, we refined our prompts to obtain more targeted code:

### Refined Prompt A: Email Validation
> "Refine the email validation regex. The requirement is: email must contain the character @ exactly once, and must end with either .cn or .com. Use a two-step validation: first check that (email.match(/@/g) || []).length === 1, then apply the regex /^[^@]+@[^@]+\\.(cn|com)$/."

**Result:** The AI updated validation.js to implement the exact two-step validation, ensuring strict compliance with the specification.

### Refined Prompt B: Responsive Menu
> "The hamburger menu should toggle the navigation links on mobile. Ensure the menu only appears on screens <= 768px and that the navigation links stack vertically when expanded."

**Result:** The AI provided CSS with `.hamburger { display: none; }` on desktop and `@media (max-width: 768px)` rules to show the hamburger and toggle a `.show` class on the `<ul>` element.

### Refined Prompt C: Demo Data
> "Add realistic demo car data for the search page including Chinese cities as locations (Beijing, Shanghai, Guangzhou, Shenzhen) and prices in CNY."

**Result:** The AI populated the demoCars array with 5 realistic entries featuring Chinese locations and appropriate CNY pricing.

---

## Conclusion

Using a GenAI tool for Delivery 2 significantly accelerated development while maintaining code quality. The AI-generated code was well-structured, properly validated, and fully responsive. Through iterative prompting and critical analysis, we refined the outputs to precisely match coursework requirements. This process demonstrated the effectiveness of GenAI as a development assistant, though human oversight was essential to ensure specifications were correctly interpreted and implemented.

---

**GitHub Repository:** https://github.com/syk26/OnlineCarSale.git
