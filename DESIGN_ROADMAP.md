# Ticketz Design Gap Analysis & Roadmap

> **Project Context:** High-Fidelity Mock UI | Portfolio Piece | Neo-Brutalist / Digital Poster Style
> **Review Date:** January 2026
> **Reviewer Role:** Senior Product Design Lead

---

## Executive Summary

After analyzing the UML diagram against the current implementation (and cross-referencing with GAP_ANALYSIS.md), I've identified significant gaps between the data model and UI coverage. The current build has **9 pages** and **27 components**, but is missing critical views that would demonstrate senior-level thinking and complete the "Community-First" narrative.

### Scope Summary
| Category | Count |
|----------|-------|
| **Essential** | 7 new pages |
| **Enhancement** | 9 new pages |
| **Polish** | 9 component states/patterns |
| **Total New Files** | ~28 files |

---

## UML Entity Coverage Analysis

| UML Entity | UI Coverage | Gap Assessment |
|------------|-------------|----------------|
| **User** | Partial | Profile exists, but missing: Order History, Ticket Wallet, Community Subscriptions list |
| **Community** | Partial | CommunityHub exists, but missing: Admin/Moderator views, Member list, Settings |
| **Event** | Good | EventDetails + Discovery exist |
| **Ticket** | Weak | Only CheckoutSuccess shows ticket. No Wallet view, no status badges (Valid/Used/Resold) |
| **Order** | Missing | No Order History, no Order Details view |
| **TicketTier** | Partial | Shown in Checkout, but no visual hierarchy for tier types |
| **Payment** | Missing | No payment status indicators (pending/completed/failed) in user views |
| **Role/Permission** | Hidden | No visual indication of user roles or permission-based UI |

---

## Design Decisions (Confirmed)

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Ticket Transfer | Status badge only | Simpler scope, badge communicates state effectively |
| Community Roles | Conditional admin panel | Show "Manage Community" section for admins/mods within same view |
| Guest Access | Full browsing | Login gate only at checkout — maximizes discovery |
| Organizer Pricing | Feature-focused | Cleaner portfolio presentation, no mock pricing tiers |

---

## Prioritized Design Checklist

### ESSENTIAL (The Core) — Ship These First

These are missing views that break the core narrative.

| # | View/Component | Route | Key Files to Create |
|---|----------------|-------|---------------------|
| 1 | **Ticket Wallet** | `/wallet` | `src/pages/attendee/Wallet.tsx`, `src/components/TicketCard.tsx`, `src/components/StatusBadge.tsx` |
| 2 | **Order History** | `/orders` | `src/pages/attendee/Orders.tsx`, `src/components/OrderCard.tsx` |
| 3 | **Enhanced Community Profile** | `/community/:id` (update) | Update `CommunityHub.tsx` — add banner, moderators, join button, conditional admin panel |
| 4 | **User Settings** | `/settings` | `src/pages/Settings.tsx` |
| 5 | **How It Works** | `/how-it-works` | `src/pages/HowItWorks.tsx` |
| 6 | **Register/Sign Up** | `/auth/register` | `src/pages/auth/Register.tsx` — Login exists, Sign Up link is broken |
| 7 | **404 Not Found** | `*` (catch-all) | `src/pages/NotFound.tsx` — Currently shows blank screen |

#### 1. Ticket Wallet View `/wallet`
**Why Essential:** The UML shows `Ticket` has statuses and relationships. Users buy tickets — where do they see them?

**Required Elements:**
- List of owned tickets (card format matching Neo-Brutalist style)
- Status badges: `VALID` (lime), `USED` (gray), `TRANSFERRED` (blue outline)
- Quick actions: View QR, Transfer, View Event
- Filter tabs: Upcoming | Past | Transferred

**UML Mapping:** `Ticket.status`, `Ticket.purchasedAt`, `Ticket.event`

#### 2. Order History View `/orders`
**Why Essential:** UML defines `Order` with statuses (pending, approved, cancelled). Users need transaction records.

**Required Elements:**
- Order list with: Order ID, Event thumbnail, Date, Total, Status badge
- Status badges: `APPROVED` (lime), `PENDING` (yellow), `CANCELLED` (red/strikethrough)
- Expandable order details showing line items (tickets purchased)

**UML Mapping:** `Order.status`, `Order.createdAt`, `Order.event`

#### 3. Community Profile Page (Enhanced) `/community/:id`
**Why Essential:** Current CommunityHub is event-focused. Need to show the "Community-First" promise.

**Missing Elements:**
- Community banner/cover image (`Community.coverImage`)
- Admin/Moderator cards (`Community.moderators[]`)
- Member count with avatars (`User` relationship)
- "Join Community" / "Leave" interaction states
- Community description/geolocation (`Community.geolocation`)
- **Conditional Admin Panel:** If user has admin/mod role, show "Manage Community" section

**UML Mapping:** `Community.coverImage`, `Community.moderators`, `Community.avatar`

#### 4. "How It Works" Page `/how-it-works`
**Why Essential:** The Guest experience needs to explain the platform value proposition visually.

**Required Sections:**
- Step-by-step visual guide (3-4 steps with illustrations)
- For Attendees: Discover → Join → Attend flow
- For Organizers: Create Community → Host Events → Grow
- Social proof / testimonials integration

#### 5. User Settings Page `/settings`
**Why Essential:** Dashboard sidebar shows "Settings" — it must go somewhere.

**Required Sections:**
- Profile editing (name, avatar, social links)
- Notification preferences (mock toggles)
- Connected accounts display (Facebook, Instagram from UML)
- Danger zone: Delete account (visual only)

**UML Mapping:** `User.facebookProfile`, `User.instagramProfile`, `User.phone`

---

### ENHANCEMENT (The Depth) — Prove Senior Thinking

Views that demonstrate mature product thinking.

| # | View/Component | Route | Key Files to Create |
|---|----------------|-------|---------------------|
| 8 | **My Communities** | `/my-communities` | `src/pages/attendee/MyCommunities.tsx`, `src/components/CommunityMemberCard.tsx` |
| 9 | **For Organizers** | `/for-organizers` | `src/pages/ForOrganizers.tsx` |
| 10 | **Event Management** | `/dashboard/events` | `src/pages/organizer/EventManagement.tsx` |
| 11 | **Member Management** | `/dashboard/members` | `src/pages/organizer/MemberManagement.tsx` |
| 12 | **Order Detail** | `/orders/:id` | `src/pages/attendee/OrderDetail.tsx` |
| 13 | **Saved Events** | `/saved` | `src/pages/attendee/SavedEvents.tsx` — Heart icons exist but no saved view |
| 14 | **Edit Event** | `/dashboard/events/:id/edit` | `src/pages/organizer/EditEvent.tsx` — Shows CRUD completeness |
| 15 | **Guest List** | `/dashboard/events/:id/guests` | `src/pages/organizer/GuestList.tsx` — Attendee management table |
| 16 | **Analytics Dashboard** | `/dashboard/analytics` | `src/pages/organizer/Analytics.tsx` — Sidebar link exists, no page |

#### 6. My Communities View `/my-communities`
**Why Important:** UML shows User → Community relationship. Current UserProfile has a small list, needs dedicated view.

**Required Elements:**
- Grid of subscribed communities
- Role indicator per community (Member, Moderator, Admin)
- Quick actions: View, Leave, Manage (if admin)
- Empty state if no communities joined

#### 7. For Organizers Landing Page `/for-organizers`
**Why Important:** Converts potential admins. Explains organizer benefits before login.

**Required Sections:**
- Hero: "Build Your Community"
- Feature highlights (Analytics, Member Management, Ticket Tiers)
- CTA to Sign Up as Organizer
- No pricing tiers (feature-focused approach)

#### 8. Event Management List `/dashboard/events`
**Why Important:** Dashboard sidebar shows "Events" — organizers need to see their event list.

**Required Elements:**
- Table/grid of organizer's events
- Status badges: Draft, Published, Past, Cancelled
- Quick actions: Edit, View Analytics, Duplicate
- "Create New Event" prominent CTA

#### 9. Member Management View `/dashboard/members`
**Why Important:** Community-First means managing community members.

**Required Elements:**
- Member list with search/filter
- Role badges (Admin, Moderator, Member)
- Join date, events attended
- Actions: Promote, Remove (visual only)

#### 10. Single Order Detail View `/orders/:id`
**Why Important:** Clicking an order should show full details.

**Required Elements:**
- Order summary card
- Line items (tickets with tier info)
- Payment status timeline
- Download receipt / View tickets CTAs

---

### POLISH (The Vibe) — Make It Feel Alive

Micro-interactions and visual states that make the portfolio feel professional.

| # | Component | Purpose | Key Files |
|---|-----------|---------|-----------|
| 17 | **Empty States** | No tickets, no orders, no communities, no events, no search results | `src/components/EmptyState.tsx` (with variants) |
| 18 | **Skeleton Loaders** | Card, table, profile skeletons | `src/components/Skeleton.tsx` |
| 19 | **Interaction States** | Sidebar active/hover, button states, input focus/error | Update existing components + add to `index.css` |
| 20 | **Toast Notifications** | Success, error, info feedback | `src/components/Toast.tsx` |
| 21 | **Confirmation Dialog** | "Are you sure?" modal for destructive actions | `src/components/ConfirmDialog.tsx` |
| 22 | **Button Loading State** | Spinner + disabled during async actions | Update button styles |
| 23 | **Card Sold Out State** | Overlay + "SOLD OUT" badge on event cards | Update event card component |
| 24 | **Avatar Fallback** | Initials or placeholder when image fails | `src/components/Avatar.tsx` |
| 25 | **Modal Animations** | Entry/exit transitions (fade, slide) | Add to modal/dialog components |

---

## Design Specifications

### Status Badge Component

```
Component: <StatusBadge status="valid" />

Variants:
┌─────────────────────────────────────────────────────────┐
│ VALID       │ bg-lime text-dark font-bold uppercase    │
│ USED        │ bg-gray-600 text-gray-300 line-through   │
│ TRANSFERRED │ border-2 border-lime text-lime bg-transparent │
│ EXPIRED     │ bg-red-900 text-red-300                  │
│ PENDING     │ bg-yellow-600 text-dark                  │
│ APPROVED    │ bg-lime text-dark                        │
│ CANCELLED   │ bg-red-900 text-red-300 line-through     │
└─────────────────────────────────────────────────────────┘
```

### Empty State Design (Neo-Brutalist)

```
┌────────────────────────────────────────────┐
│  ┌──────────────────────────────────────┐  │
│  │  [Icon - Line art style]             │  │
│  │                                      │  │
│  │  NO TICKETS YET                      │  │  ← Fraunces, bold, uppercase
│  │                                      │  │
│  │  Your ticket wallet is empty.        │  │  ← Manrope, gray-400
│  │  Discover events and grab your       │  │
│  │  first ticket.                       │  │
│  │                                      │  │
│  │  ┌─────────────────────┐             │  │
│  │  │  EXPLORE EVENTS     │             │  │  ← Lime button
│  │  └─────────────────────┘             │  │
│  └──────────────────────────────────────┘  │
│         2px lime border, sharp corners      │
└────────────────────────────────────────────┘

Variants needed:
- No Tickets → "EXPLORE EVENTS" CTA
- No Orders → "START EXPLORING" CTA
- No Communities → "FIND YOUR PEOPLE" CTA
- No Events (Organizer) → "CREATE YOUR FIRST EVENT" CTA
```

### Skeleton Loader Design

```
Style Requirements:
- Background: #1a1a1a (slightly lighter than dark)
- Animation: pulse (opacity 0.5 → 1 → 0.5)
- Border-radius: 0 (sharp corners always)
- Accent: 2px lime line at top of major cards

Card Skeleton:
┌────────────────────────────────────────────┐
│ ████████████████████████████  ← lime bar   │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│ ██████████████████                         │
│ ████████████                               │
└────────────────────────────────────────────┘
```

### Interaction States

**Sidebar:**
- Default: `text-gray-400`
- Hover: `bg-surface text-white`
- Active: `border-l-2 border-lime text-lime bg-surface/50`

**Buttons:**
- Default: `bg-lime text-dark`
- Hover: `bg-limehover`
- Active: `scale-95 bg-lime`
- Disabled: `bg-gray-600 text-gray-400 cursor-not-allowed opacity-50`

**Cards:**
- Default: `bg-surface border-transparent`
- Hover: `border-lime/30 shadow-lg shadow-lime/5`
- Focus: `outline-2 outline-lime outline-offset-2`

**Inputs:**
- Default: `border-gray-700`
- Focus: `border-lime ring-1 ring-lime`
- Error: `border-red-500 ring-1 ring-red-500`
- Disabled: `bg-gray-800 text-gray-500`

---

## Navigation Updates Required

### Add to App.tsx Routes:
```tsx
// Auth routes
<Route path="/auth/register" element={<Register />} />

// Attendee routes
<Route path="/wallet" element={<Wallet />} />
<Route path="/orders" element={<Orders />} />
<Route path="/orders/:id" element={<OrderDetail />} />
<Route path="/my-communities" element={<MyCommunities />} />
<Route path="/saved" element={<SavedEvents />} />
<Route path="/settings" element={<Settings />} />

// Guest/Marketing routes
<Route path="/how-it-works" element={<HowItWorks />} />
<Route path="/for-organizers" element={<ForOrganizers />} />

// Organizer routes
<Route path="/dashboard/events" element={<EventManagement />} />
<Route path="/dashboard/events/:id/edit" element={<EditEvent />} />
<Route path="/dashboard/events/:id/guests" element={<GuestList />} />
<Route path="/dashboard/members" element={<MemberManagement />} />
<Route path="/dashboard/analytics" element={<Analytics />} />

// Error routes (catch-all last)
<Route path="*" element={<NotFound />} />
```

### Update Navbar.tsx:
- Add "How It Works" to guest navigation (between Discovery and Communities)
- Add "For Organizers" to footer or secondary nav

### Update Sidebar.tsx:
- Ensure "Events" links to `/dashboard/events`
- Ensure "Members" links to `/dashboard/members`
- Ensure "Settings" links to `/settings`
- Add interaction states (active/hover) per design spec

### Update AppHub.tsx:
- Add quick action cards for:
  - My Tickets → `/wallet`
  - My Orders → `/orders`
  - My Communities → `/my-communities`

---

## Additional Design Specs (from GAP_ANALYSIS review)

### 404 Not Found Page (Neo-Brutalist)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                         404                                 │  ← Fraunces, 200px, lime
│                                                             │
│                   PAGE NOT FOUND                            │  ← Manrope, uppercase, white
│                                                             │
│     The page you're looking for doesn't exist or           │  ← gray-400
│     has been moved.                                         │
│                                                             │
│              ┌─────────────────────┐                        │
│              │   GO HOME           │                        │  ← Lime button
│              └─────────────────────┘                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Button Loading State

```css
/* Add to button component */
.btn-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn-loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

### Input Error State

```
┌─────────────────────────────────────────────────┐
│  Email                                          │  ← Label (gray-400)
│  ┌───────────────────────────────────────────┐  │
│  │  invalid@email                            │  │  ← Red border (border-red-500)
│  └───────────────────────────────────────────┘  │
│  ⚠ Please enter a valid email address           │  ← Error text (text-red-400, text-sm)
└─────────────────────────────────────────────────┘
```

### Card Sold Out State

```
┌─────────────────────────────────────────┐
│  ┌───────────────────────────────────┐  │
│  │  [Event Image]                    │  │
│  │  ┌─────────────────────────────┐  │  │  ← Semi-transparent overlay
│  │  │      SOLD OUT               │  │  │  ← Centered badge
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
│  Event Title                            │  ← Dimmed (opacity-50)
│  Date • Location                        │
│  ~~$45~~ SOLD OUT                       │  ← Price strikethrough
└─────────────────────────────────────────┘

Overlay: bg-dark/70
Badge: bg-red-600 text-white font-bold px-4 py-2
```

### Confirmation Dialog

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ⚠ Delete Event?                               │  ← Fraunces, white
│                                                 │
│  This action cannot be undone. The event       │  ← gray-400
│  "Summer Festival 2026" will be permanently    │
│  deleted along with all ticket data.           │
│                                                 │
│  ┌─────────────┐    ┌─────────────────────┐    │
│  │   CANCEL    │    │   DELETE EVENT      │    │
│  └─────────────┘    └─────────────────────┘    │
│   (gray outline)        (red bg)               │
│                                                 │
└─────────────────────────────────────────────────┘

Border: 2px solid lime
Background: bg-surface
```

### Avatar Fallback

```
Component: <Avatar src={url} name="Sarah Jenkins" />

States:
1. Loading: Pulsing gray circle
2. Loaded: Image displayed
3. Error: Initials on lime background

Fallback Design:
┌─────────┐
│         │
│   SJ    │  ← First letters of name
│         │     bg-lime text-dark font-bold
└─────────┘
```

---

## Component Inventory

### New Components to Create

| Component | Priority | Purpose |
|-----------|----------|---------|
| `StatusBadge.tsx` | Essential | Reusable status indicator (valid, used, pending, etc.) |
| `TicketCard.tsx` | Essential | Display ticket with status, event info, QR action |
| `OrderCard.tsx` | Essential | Display order summary with status |
| `EmptyState.tsx` | Polish | Reusable empty state container with variants |
| `Skeleton.tsx` | Polish | Loading placeholder components |
| `CommunityMemberCard.tsx` | Enhancement | For My Communities grid |
| `MemberRow.tsx` | Enhancement | For member management table |
| `Toast.tsx` | Polish | Feedback notification component |
| `ConfirmDialog.tsx` | Polish | Destructive action confirmation modal |
| `Avatar.tsx` | Polish | Image with loading state + initials fallback |
| `Modal.tsx` | Polish | Base modal with entry/exit animations |

---

## Implementation Phases

### Phase 1: Core User Journey (Essential)
1. StatusBadge component (foundation for other views)
2. Ticket Wallet View
3. Order History View
4. Enhanced Community Profile
5. User Settings Page

### Phase 2: Guest Conversion (Essential)
6. How It Works Page
7. Navigation updates for guest flow

### Phase 3: Organizer Depth (Enhancement)
8. For Organizers Landing Page
9. Event Management List
10. Member Management View
11. Order Detail View
12. My Communities View

### Phase 4: Visual Polish (Polish)
13. Empty States (all variants)
14. Skeleton Loaders
15. Interaction States (buttons, inputs, cards, sidebar)
16. Toast Notifications

---

## File Summary

### New Pages (16 files)
```
# Essential
src/pages/attendee/Wallet.tsx
src/pages/attendee/Orders.tsx
src/pages/Settings.tsx
src/pages/HowItWorks.tsx
src/pages/auth/Register.tsx
src/pages/NotFound.tsx

# Enhancement
src/pages/attendee/OrderDetail.tsx
src/pages/attendee/MyCommunities.tsx
src/pages/attendee/SavedEvents.tsx
src/pages/ForOrganizers.tsx
src/pages/organizer/EventManagement.tsx
src/pages/organizer/MemberManagement.tsx
src/pages/organizer/EditEvent.tsx
src/pages/organizer/GuestList.tsx
src/pages/organizer/Analytics.tsx
```

### New Components (12 files)
```
src/components/TicketCard.tsx
src/components/StatusBadge.tsx
src/components/OrderCard.tsx
src/components/EmptyState.tsx
src/components/Skeleton.tsx
src/components/CommunityMemberCard.tsx
src/components/MemberRow.tsx
src/components/Toast.tsx
src/components/ConfirmDialog.tsx
src/components/Avatar.tsx
src/components/Modal.tsx              (if not exists, with animations)
```

### Files to Update (5 files)
```
src/App.tsx                           → Add 15 new routes
src/pages/attendee/CommunityHub.tsx   → Add banner, moderators, admin panel
src/components/Navbar.tsx             → Add "How It Works" link
src/components/dashboard/Sidebar.tsx  → Working links + interaction states
src/index.css                         → Button loading, input error, card sold-out states
```

---

## Success Criteria

When complete, the portfolio should demonstrate:

1. **Full UML Coverage:** Every entity in the diagram has corresponding UI representation
2. **Complete User Journeys:** Attendee can browse → join → purchase → view tickets → see history
3. **Organizer Depth:** Dashboard leads to functional-looking management views
4. **Guest Conversion:** Marketing pages explain value before requiring login
5. **Visual Polish:** Empty states, loading states, and interaction feedback feel intentional
6. **Design System Consistency:** All new views follow Neo-Brutalist style (sharp corners, lime accents, dark mode)
