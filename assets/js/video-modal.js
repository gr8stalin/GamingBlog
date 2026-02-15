// Video Modal JavaScript
(function() {
  // Initialize all video modals on the page
  var modals = document.querySelectorAll('.video-modal-overlay');
  
  modals.forEach(function(modal) {
    var video = modal.querySelector('video');
    var videoSource = modal.querySelector('source');
    var closeBtn = modal.querySelector('.video-modal-close');
    
    // Close modal function
    function closeModal() {
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
      document.body.style.overflow = '';
    }
    
    // Close button click
    if (closeBtn) {
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeModal();
      };
    }
    
    // Click on overlay background to close
    modal.onclick = function(event) {
      if (event.target === modal || event.target.classList.contains('video-modal-container')) {
        closeModal();
      }
    };
    
    // Prevent clicks on video itself from closing modal
    if (video) {
      video.onclick = function(event) {
        event.stopPropagation();
      };
    }
    
    // ESC key to close
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
      }
    });
  });

  // Global function to open modal with video
  window.openVideoModal = function(videoUrl, targetId) {
    var modalId = targetId ? 'videoModal-' + targetId : 'videoModal-default';
    var modal = document.getElementById(modalId);
    
    if (!modal) return;
    
    var video = modal.querySelector('video');
    var videoSource = modal.querySelector('source');
    
    if (!video || !videoSource) return;
    
    var extension = videoUrl.split('.').pop().split('?')[0].toLowerCase();
    var mimeType = extension === 'webm' ? 'video/webm' : 'video/mp4';
    
    videoSource.src = videoUrl;
    videoSource.type = mimeType;
    video.load();
    modal.style.display = 'block';
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    // Autoplay after load
    video.addEventListener('loadeddata', function onLoad() {
      video.play().catch(function(err) {
        console.log('Autoplay prevented:', err);
      });
      video.removeEventListener('loadeddata', onLoad);
    });
  };
})();
