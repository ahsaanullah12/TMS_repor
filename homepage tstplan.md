# Homepage Test Plan

## Application Overview

Test plan for the homepage of The Moon Show, covering core load behavior, navigation, content visibility, footer links, and responsive usability.

## Test Scenarios

### 1. Homepage

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage loads successfully

**File:** `tests/homepage.spec.ts`

**Steps:**
  1. Open the homepage URL in a fresh browser session.
    - expect: The page loads without a blank screen or fatal error.
    - expect: The browser title is visible and matches the site branding.
  2. Wait for the main header, primary content area, and footer to appear.
    - expect: The header/navigation is visible.
    - expect: The main content section and footer are visible.
    - expect: At least one featured article or content card is displayed.

#### 1.2. Primary navigation works

**File:** `tests/homepage.spec.ts`

**Steps:**
  1. Review the top navigation bar and click each major link such as Exchanges, Reviews, Tutorials, Blog, and About.
    - expect: Each link is visible and clickable.
    - expect: Clicking a navigation item opens the expected destination or section.
    - expect: The user can return to the homepage without layout corruption.

#### 1.3. Featured content and article cards render correctly

**File:** `tests/homepage.spec.ts`

**Steps:**
  1. Scroll through the homepage and inspect the latest article and review sections.
    - expect: Article titles, summaries, and metadata appear correctly.
    - expect: Images or thumbnails load without broken placeholders where expected.
    - expect: Text remains readable and properly formatted.
  2. Click one featured article or review card.
    - expect: The selected article opens successfully.
    - expect: The destination page loads with content and does not show a broken layout.

#### 1.4. Blog and category sections are accessible

**File:** `tests/homepage.spec.ts`

**Steps:**
  1. Locate the blog or content categories section and inspect the category links.
    - expect: Category labels such as News, Bitcoin, Ethereum, Altcoins, and Price Analysis are visible.
    - expect: Users can select or navigate to category-based content.
    - expect: The page updates or opens the relevant category view without errors.

#### 1.5. Footer and social links are present

**File:** `tests/homepage.spec.ts`

**Steps:**
  1. Scroll to the footer area and review the links and copyright text.
    - expect: Footer links such as About, Contact Us, and social links are visible.
    - expect: Links are clickable and do not produce broken navigation.
    - expect: Copyright or legal text is displayed correctly.

#### 1.6. Homepage remains usable on mobile viewport

**File:** `tests/homepage.spec.ts`

**Steps:**
  1. Resize the browser to a mobile width and review the homepage layout.
    - expect: Content reflows without overlapping text or hidden navigation.
    - expect: Buttons and links remain tappable and readable.
    - expect: No horizontal scrolling is required for the main homepage experience.
