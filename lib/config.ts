// Configuration for controlling temporary landing page
export const config = {
  // Set this to true to show the temporary landing page
  // Set this to false to show the main website
  showTemporaryLanding: process.env.NEXT_PUBLIC_SHOW_TEMPORARY_LANDING === 'true' || false,
  
  // Alternative: You can also control this via a simple boolean
  // showTemporaryLanding: false, // Change to true to enable temporary landing
}; 