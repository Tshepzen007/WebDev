// Get references to the HTML elements
const headerTextElement = document.getElementById('headerText');
const transformBrandHeadingElement = document.getElementById('transformBrandHeading');
const transformBrandDescriptionElement = document.getElementById('transformBrandDescription');
const transformBrandLinkElement = document.getElementById('transformBrandLink');
const standOutHeadingElement = document.getElementById('standOutHeading');
const standOutDescriptionElement = document.getElementById('standOutDescription');
const standOutLinkElement = document.getElementById('standOutLink');
const graphicDesignHeadingElement = document.getElementById('graphicDesignHeading');
const graphicDesignDescriptionElement = document.getElementById('graphicDesignDescription');
const graphicDesignLinkElement = document.getElementById('graphicDesignLink');
const photographyHeadingElement = document.getElementById('photographyHeading');
const photographyDescriptionElement = document.getElementById('photographyDescription');
const testimonialHeadingElement = document.getElementById('testimonialHeading');
const testimonialContainer = document.getElementById('testimonialContainer');

// Get the content from the content.js file
const {
  headerText,
  transformBrandContent,
  standOutContent,
  graphicDesignContent,
  photographyContent,
  testimonials
} = websiteContent;

// Inject the content into the HTML elements
headerTextElement.textContent = headerText;
transformBrandHeadingElement.textContent = transformBrandContent.heading;
transformBrandDescriptionElement.textContent = transformBrandContent.description;
transformBrandLinkElement.textContent = transformBrandContent.link;
standOutHeadingElement.textContent = standOutContent.heading;
standOutDescriptionElement.textContent = standOutContent.description;
standOutLinkElement.textContent = standOutContent.link;
graphicDesignLinkElement.textContent = graphicDesignContent.link;
graphicDesignHeadingElement.textContent = graphicDesignContent.heading;
graphicDesignDescriptionElement.textContent = graphicDesignContent.description;
photographyHeadingElement.textContent = photographyContent.heading;
photographyDescriptionElement.textContent = photographyContent.description;
testimonialHeadingElement.textContent = 'Client Testimonials';

// Render the testimonials
testimonials.forEach(testimonial => {
  const testimonialCard = document.createElement('div');
  testimonialCard.classList.add('testimonial-card');
  testimonialCard.innerHTML = `
    <div class="client-image-container">
      <img src="images/image-${testimonial.name.split(' ')[0].toLowerCase()}.jpg" alt="${testimonial.name}" class="img-fluid client-image">
    </div>
    <p class="testimonial-text">${testimonial.quote}</p>
    <h4 class="client-name">${testimonial.name}</h4>
    <p class="client-position">${testimonial.position}</p>
  `;
  testimonialContainer.appendChild(testimonialCard);
});
