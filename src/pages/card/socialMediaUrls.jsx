import supabase from '../../supabase'; // Import the supabase client

async function fetchSocialMediaUserData(userId) {
  try {
    const { data, error } = await supabase
      .from('social_media_data')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    return null;
  }
}

const extractUserIdFromURL = () => {
  const url = window.location.pathname;
  const profileIndex = url.indexOf('/profile/');
  if (profileIndex === -1) {
    return 1; // Default userId to 1 if '/profile/' is not found
  }
  const userId = url.substring(profileIndex + 9).replace(/\/$/, ''); // Remove trailing slash if exists
  if (!userId || isNaN(userId)) {
    return 1; // Default userId to 1 if not provided or not a number
  }
  return parseInt(userId, 10);
};

async function populateSocialMediaUrls() {
  const userId = extractUserIdFromURL();
  const userData = await fetchSocialMediaUserData(userId);
  if (userData) {
    const socialMediaUrls = {
      avatar: userData.avatar,
      name: userData.name,
      designation: userData.designation,
      phone: userData.phone ? `tel:${userData.phone}` : '',
      whatsapp: userData.whatsapp ? `https://api.whatsapp.com/send/?phone=${userData.whatsapp}` : '',
      website: userData.website,
      facebook: userData.facebook,
      instagram: userData.instagram,
      youtube: userData.youtube,
      linkedin: userData.linkedin,
      googleReviews: userData.google_reviews,
      upi: userData.upi,
      email: userData.email ? `mailto:${userData.email}` : '',
      maps: userData.maps,
      backgroundImage: userData.background_image,
      drive: userData.drive_link
    };
    return socialMediaUrls;
  } else {
    // Handle error or return default values
    return null;
  }
}

const socialMediaUrls = await populateSocialMediaUrls();
export default socialMediaUrls;
