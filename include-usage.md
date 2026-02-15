# Video Modal Include Usage

This document describes how to use the `video-modal.html` include to display videos in a modal popup window within your Jekyll posts.

## Overview

The video modal include provides a responsive, full-screen modal that:
- Supports MP4 and WebM video formats
- Autoplays when opened
- Stops playback when closed
- Can be closed by clicking outside the video, pressing ESC, or clicking the X button
- Prevents body scrolling when open

## Basic Usage

### 1. Include the Modal in Your Post

Add the include statement anywhere in your post markdown file:

```liquid
{% include video-modal.html %}
```

This creates a modal with the default ID `videoModal-default`.

### 2. Create Links to Open the Modal

Add links in your post content that call the `openVideoModal()` function:

```html
<a href="#" onclick="openVideoModal('/assets/video/my-video.mp4'); return false;">Watch the video</a>
```

You can also use it inline within markdown paragraphs:

```markdown
Check out <a href="#" onclick="openVideoModal('/assets/video/gameplay.mp4'); return false;">this gameplay clip</a> from yesterday's stream.
```

## Multiple Modals on One Page

If you need multiple independent modals on the same page, give each a unique ID:

### Include Multiple Modals with Unique IDs

```liquid
{% include video-modal.html id="gameplay" %}
{% include video-modal.html id="tutorial" %}
{% include video-modal.html id="highlight" %}
```

### Link to Specific Modals

Pass the modal ID as the second parameter:

```html
<a href="#" onclick="openVideoModal('/assets/video/gameplay.mp4', 'gameplay'); return false;">Gameplay</a>
<a href="#" onclick="openVideoModal('/assets/video/tutorial.mp4', 'tutorial'); return false;">Tutorial</a>
<a href="#" onclick="openVideoModal('/assets/video/highlight.mp4', 'highlight'); return false;">Highlight</a>
```

## Supported Video Formats

The modal automatically detects the video format based on file extension:

- **MP4** files: `.mp4` extension → `video/mp4` MIME type
- **WebM** files: `.webm` extension → `video/webm` MIME type

## Function Reference

### `openVideoModal(videoUrl, targetId)`

**Parameters:**
- `videoUrl` (required): Path to the video file (relative or absolute URL)
- `targetId` (optional): ID of the specific modal to open. Defaults to `'default'` if omitted.

**Example calls:**
```javascript
// Open default modal
openVideoModal('/assets/video/clip.mp4');

// Open specific modal by ID
openVideoModal('/assets/video/clip.mp4', 'gameplay');
```
