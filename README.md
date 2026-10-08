# African Foods Company Ltd — IT Policy Website

## Project overview

Our group developed this website for Task 2 of our Work Integrated
Learning assignment.

The website brings African Foods' proposed IT policies and procedures
together in one place. Employees can read guidance on protecting company
information, requesting equipment, reporting technical problems and
responding to disruptions.

The company scenario covers four locations:

- Cape Town Head Office
- Durban Branch
- Gqeberha Branch
- Polokwane Branch

This is an academic prototype. The policies and procedures are proposals
for the assignment rather than confirmed company operations.

## Website objectives

The website aims to:

- Give employees easy access to IT policies and procedures.
- Explain responsibilities and approval requirements.
- Provide practical examples linked to the company scenario.
- Help employees prepare useful technical problem reports.
- Explain maintenance schedules and recovery responsibilities.
- Present consistent guidance across all four locations.

## Website pages

| File | Purpose |
| --- | --- |
| `index.html` | Introduces the portal and links to the policy guides. |
| `security.html` | Explains account protection, device security, information handling and incident reporting. |
| `acceptable-use.html` | Explains responsible use of company technology and prohibited activities. |
| `acquisition.html` | Describes equipment requests, approvals, purchasing and asset handover. |
| `helpdesk.html` | Explains reporting requirements, priorities, escalation and ticket closure. |
| `maintenance.html` | Presents the proposed maintenance schedule, task owners and change procedures. |
| `disaster-recovery.html` | Explains recovery roles and procedures for different disruptions. |

## Technologies used

- **HTML5:** Structures the pages, navigation, tables and policy content.
- **CSS3:** Provides shared styling through `style.css`.
- **JavaScript:** Provides shared interactive features through `script.js`.
- **Git and GitHub:** Record changes and manage the project source files.

CSS and JavaScript are kept in external files so that shared features
can be maintained without repeating the code on every page.

## Project files

| File | Description |
| --- | --- |
| `style.css` | Shared website stylesheet. |
| `script.js` | Shared checklist and printing behaviour. |
| `images.jpg` | Homepage image stored alongside the HTML files. |
| `README.md` | Project overview, setup instructions and development notes. |

All HTML pages, the stylesheet, the JavaScript file and the homepage
image should remain in the same project folder.

## Features

### Navigation and policy access

- Consistent navigation across all seven pages.
- Current-page indicators in the HTML.
- Homepage cards linking to each policy.
- Section links on policy pages.
- Related-guide links for moving between topics.

### Detailed guidance

- Responsibilities assigned to relevant staff roles.
- Equipment approval and handover steps.
- Help desk priority categories and escalation guidance.
- Maintenance tasks with frequencies and responsible roles.
- Recovery procedures for different incidents.
- Workplace examples linked to African Foods.

### Interactive features

- Expandable examples and FAQs using HTML `details` elements.
- Personal checklists with a JavaScript progress count.
- A reset button for clearing checklist selections.
- Print buttons on policy pages.
- Examples expand for printing and return to their previous state afterwards.

Checklist selections are not saved by the website. They are preparation
and learning aids, not formal acceptance records or proof of completed work.

## How to open the website

1. Download or clone the repository.
2. If downloading a ZIP, extract it completely.
3. Keep the project files together.
4. Open `index.html` in a web browser.
5. Use the navigation links to open the other pages.

The project can also be opened in Visual Studio Code and previewed
using Live Server.

No package installation, database or API key is required.

## External file links

Each HTML page includes these links inside its `head` element:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
# African Foods Company Ltd — IT Policy Website

## Project overview

Our group developed this website for Task 2 of our Work Integrated
Learning assignment.

The website brings African Foods' proposed IT policies and procedures
together in one place. Employees can read guidance on protecting company
information, requesting equipment, reporting technical problems and
responding to disruptions.

The company scenario covers four locations:

- Cape Town Head Office
- Durban Branch
- Gqeberha Branch
- Polokwane Branch

This is an academic prototype. The policies and procedures are proposals
for the assignment rather than confirmed company operations.

## Website objectives

The website aims to:

- Give employees easy access to IT policies and procedures.
- Explain responsibilities and approval requirements.
- Provide practical examples linked to the company scenario.
- Help employees prepare useful technical problem reports.
- Explain maintenance schedules and recovery responsibilities.
- Present consistent guidance across all four locations.

## Website pages

| File | Purpose |
| --- | --- |
| `index.html` | Introduces the portal and links to the policy guides. |
| `security.html` | Explains account protection, device security, information handling and incident reporting. |
| `acceptable-use.html` | Explains responsible use of company technology and prohibited activities. |
| `acquisition.html` | Describes equipment requests, approvals, purchasing and asset handover. |
| `helpdesk.html` | Explains reporting requirements, priorities, escalation and ticket closure. |
| `maintenance.html` | Presents the proposed maintenance schedule, task owners and change procedures. |
| `disaster-recovery.html` | Explains recovery roles and procedures for different disruptions. |

## Technologies used

- **HTML5:** Structures the pages, navigation, tables and policy content.
- **CSS3:** Provides shared styling through `style.css`.
- **JavaScript:** Provides shared interactive features through `script.js`.
- **Git and GitHub:** Record changes and manage the project source files.

CSS and JavaScript are kept in external files so that shared features
can be maintained without repeating the code on every page.

## Project files

| File | Description |
| --- | --- |
| `style.css` | Shared website stylesheet. |
| `script.js` | Shared checklist and printing behaviour. |
| `images.jpg` | Homepage image stored alongside the HTML files. |
| `README.md` | Project overview, setup instructions and development notes. |

All HTML pages, the stylesheet, the JavaScript file and the homepage
image should remain in the same project folder.

## Features

### Navigation and policy access

- Consistent navigation across all seven pages.
- Current-page indicators in the HTML.
- Homepage cards linking to each policy.
- Section links on policy pages.
- Related-guide links for moving between topics.

### Detailed guidance

- Responsibilities assigned to relevant staff roles.
- Equipment approval and handover steps.
- Help desk priority categories and escalation guidance.
- Maintenance tasks with frequencies and responsible roles.
- Recovery procedures for different incidents.
- Workplace examples linked to African Foods.

### Interactive features

- Expandable examples and FAQs using HTML `details` elements.
- Personal checklists with a JavaScript progress count.
- A reset button for clearing checklist selections.
- Print buttons on policy pages.
- Examples expand for printing and return to their previous state afterwards.

Checklist selections are not saved by the website. They are preparation
and learning aids, not formal acceptance records or proof of completed work.

## How to open the website

1. Download or clone the repository.
2. If downloading a ZIP, extract it completely.
3. Keep the project files together.
4. Open `index.html` in a web browser.
5. Use the navigation links to open the other pages.

The project can also be opened in Visual Studio Code and previewed
using Live Server.

No package installation, database or API key is required.

## External file links

Each HTML page includes these links inside its `head` element:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
The defer attribute allows the browser to read the HTML before
running the shared JavaScript.

The homepage uses a relative image path:

<img src="images.jpg"
     alt="African Foods company illustration"
     class="website-image">

Using a relative path avoids depending on a specific user's
computer or Downloads folder.

Maintenance schedule
The maintenance page matches the proposed schedule in the written report:

Daily: Review central service availability, backup results and branch connection problems.
Weekly: Review device status, repeated faults and configuration backups.
Monthly: Review assets, outstanding support issues and applicable updates.
Quarterly: Perform a sample restoration test, review access and check documentation.
Before significant changes: Back up configurations, assess impact and prepare rollback steps.
After changes: Test services, update records and confirm availability with users.
When staff join, move or leave: Update accounts and equipment records following authorised instructions.
Potentially disruptive maintenance requires IT Manager approval
and advance communication to affected branch contacts.

Prototype limitations
This website provides information and basic browser interactions.

It does not:

Submit live support tickets or contact an IT team.
Approve equipment purchases.
Monitor actual network or server availability.
Perform backups or recovery actions.
Store checklist selections as official records.
Verify the Packet Tracer network configuration.
Real support contact details, operational systems and management
approval would be needed before using the portal in a business.

Testing checklist
Record the actual results after testing the completed website.
The entries below are not claims that testing has already passed.

Test	Expected result	Actual result
Open all navigation links	Each link opens the correct page.	To be recorded
Open the site from an extracted folder	Pages and supporting files load correctly.	To be recorded
Check the homepage image	images.jpg displays without a computer-specific path.	To be recorded
Follow page-section links	The browser moves to the matching section.	To be recorded
Expand examples and FAQs	Content opens and closes correctly.	To be recorded
Select checklist items	The progress count updates accurately.	To be recorded
Reset a checklist	All selections clear and the count returns to zero.	To be recorded
Print a policy page	The print dialog opens and examples are expanded.	To be recorded
Close print preview	Examples return to their earlier open or closed state.	To be recorded
Navigate with the keyboard	Links, buttons and examples can be reached and operated.	To be recorded
Check different screen sizes	Content remains readable and controls remain usable.	To be recorded
Record the browser, test date and any corrections made.
Use screenshots from the actual running website in the assignment.

Development changelog
Original version
Created seven HTML pages.
Added a shared stylesheet and navigation links.
Included basic policy lists and a recovery summary.
Manual content update
Expanded policies with company-specific explanations.
Added staff responsibilities and approval stages.
Added detailed maintenance and recovery procedures.
Added expandable workplace examples and FAQs.
Added links to sections within policy pages.
Connected pages to the external JavaScript file.
Added personal checklists and printing controls.
Changed the homepage image to a relative file path.
Replaced the homepage navigation container with a nav element.
Updated this README with setup instructions and testing guidance.
Planned styling update
Style the new cards, banners, tables and policy sections consistently.
Improve layouts for smaller screens.
Add subtle floating effects to the homepage cards.
Provide reduced-motion support.
Improve keyboard focus and print presentation.
Move these items into the completed changelog only after implementing
and checking them.

Group contributions
Complete this table with the work each member actually performed.

Group member	Contribution
Add name	Describe actual work completed
Add name	Describe actual work completed
Add name	Describe actual work completed
Add name	Describe actual work completed
Assignment evidence
Include screenshots showing:

The homepage and policy navigation.
Security and acceptable use guidance.
Equipment approval responsibilities.
Help desk priorities and escalation.
The maintenance schedule.
An expanded disaster recovery scenario.
A working checklist.
The layout on a smaller screen after styling is complete.
Provide the GitHub repository URL separately from any published
website URL. A repository link gives access to source code;
it is not automatically a live website.

Credits and sources
Company scenario: the supplied Work Integrated Learning module brief.
Policy explanations: proposed procedures developed for this assignment.
Homepage image: add the actual creator, source and usage permission.
External references and development assistance: acknowledge these
according to the institution's requirements.

**Before submission:** complete the contribution table, image credit and actual test results.