# Contact Us Test Plan

## Application Overview

Contact Us page validation and form interaction scenarios for The Moon Show website.

## Test Scenarios

### 1. Contact Us page

**Seed:** `tests/seed.spec.ts`

#### 1.1. Contact page loads with core content

**File:** `tests/contact-us-test-plan.md`

**Steps:**
  1. Open the Contact Us page at /contact-us
    - expect: The page title contains 'Contact Us'
    - expect: The heading 'Contact Us' is visible
    - expect: The subtitle 'Any question or remarks? Just write us a message!' is visible
  2. Verify contact information is visible
    - expect: The marketing email address is displayed
    - expect: The social links are visible

#### 1.2. Contact form accepts user input

**File:** `tests/contact-us-test-plan.md`

**Steps:**
  1. Fill in all required form fields with valid test data
    - expect: First Name, Last Name, Email, Phone Number and Message fields accept the entered values
  2. Select a subject option
    - expect: The selected subject radio button is active
  3. Click the Send Message button
    - expect: The form remains interactive and the button is enabled
