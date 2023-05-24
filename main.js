// mobilemenu js
const navList = document.getElementById('navList');
const closeButton = document.getElementById('closeButton');

function menuPopup() {
  navList.classList.toggle('active');
  closeButton.classList.toggle('active');

  if (window.innerWidth > 768) {
    document.getElementById('navList').classList.toggle('active');
    return false;
  }
  return true;
}
navList.addEventListener('click', menuPopup);

// speakers-section
const speakers = [{
  id: 2,
  image1: 'images/speaker_05.png',
  speakerName: 'Manzi',
  speakerTitle: 'Ice-shop-owner',
  speakerBio: 'lorem lorem lorem lorem lorem lorem lorem lorem.',
},
{
  id: 2,
  image1: 'images/speaker_01.png',
  speakerName: 'Manzi',
  speakerTitle: 'Ice-shop-owner',
  speakerBio: 'lorem lorem lorem lorem lorem lorem lorem lorem.',
},
{
  id: 3,
  image1: 'images/speaker_02.png',
  speakerName: 'Ally',
  speakerTitle: 'Ice-shop-owner',
  speakerBio: 'lorem lorem lorem lorem lorem lorem lorem lorem.',
},
{
  id: 4,
  image1: 'images/speaker_03.png',
  speakerName: 'Yuhu',
  speakerTitle: 'Ice-shop-owner',
  speakerBio: 'lorem lorem lorem lorem lorem lorem lorem lorem.',
},
{
  id: 5,
  image1: 'images/speaker_06.png',
  speakerName: 'Alphs',
  speakerTitle: 'Ice-shop-owner',
  speakerBio: 'lorem lorem lorem lorem lorem lorem lorem lorem.',
},
{
  id: 6,
  image1: 'images/speaker_05.png',
  speakerName: 'Jane',
  speakerTitle: 'Ice-shop-owner',
  speakerBio: 'lorem lorem lorem lorem lorem.',
}];

function generateSpeakers(
  id,
  image1,
  bgImg,
  speakerName,
  speakerTitle,
  speakerBio,
) {
  return ` 
     <div class="speaker-cards" title="speakers">
       <div class="each-card" id="speakerCard-${id}">
         <img class="speaker-images card2-img" src="${image1}" alt="Card2-image">
        
         <div class="card-body">
           <h5 class="speaker-name">${speakerName}</h5>
           <p class="speaker-title">${speakerTitle}</p>
           <p class="speaker-bio" alt="speaker-bio">${speakerBio}</p>
         </div>
       </div>
     </div>
     `;
}

let speakersCard = '';

speakers.forEach((index) => {
  const speakersCardDetails = generateSpeakers(
    index.id,
    index.image1,
    index.bgImg,
    index.speakerName,
    index.speakerTitle,
    index.speakerBio,
  );
  speakersCard += speakersCardDetails;
});

document.getElementById('speaker-cards').innerHTML = speakersCard;
