const themes = [
  {
    title: "Impact of slavery and intergenerational trauma",
    subthemes: [
      {
        title: "Historical trauma",
        points: [
          "Participants frequently referenced the enduring impact of slavery and colonization, noting that trauma continues to affect BIPOC communities across generations.",
          "This trauma is not merely historical but a living reality that influences mental health and well-being today."
        ]
      },
      {
        title: "Emotional suppression",
        points: [
          "The suppression of emotions, especially sadness and vulnerability, is often linked to cultural conditioning that equates emotional expression with weakness.",
          "This conditioning is seen as a direct result of survival mechanisms developed under oppressive systems."
        ]
      }
    ]
  },
  {
    title: "Cultural stigma",
    subthemes: [
      {
        title: "Stigma around mental health",
        points: [
          "There is a significant cultural stigma against discussing mental health within BIPOC communities.",
          "This stigma often stems from colonial ideologies that pathologize mental health issues, associating them with weakness or moral failure."
        ]
      },
      {
        title: "Cultural misunderstanding by non-Indigenous professionals",
        points: [
          "Mainstream mental health services frequently lack an understanding of the cultural contexts of BIPOC clients.",
          "This lack of cultural competence and insight leads to pathologizing clients and fosters a general mistrust of the mental health system among BIPOC communities."
        ]
      }
    ]
  },
  {
    title: "Accessibility and financial constraints",
    subthemes: [
      {
        title: "Cost of services",
        points: [
          "The high cost of mental health services is a significant barrier for many in BIPOC communities.",
          "Even when there is recognition of the need for mental health support, perceived financial constraints often deter individuals from seeking help."
        ]
      },
      {
        title: "Alternative payment solutions",
        points: [
          "To address these financial barriers, some professionals offer sliding scales, payment plans, or even free services, making mental health care more accessible to those who might otherwise be unable to afford it."
        ]
      }
    ]
  },
  {
    title: "Faith-based and cultural practices",
    subthemes: [
      {
        title: "Religious and cultural beliefs",
        points: [
          "Strong religious and cultural beliefs play a crucial role in shaping attitudes toward healing. Indigenous healing practices, traditional religious systems, and faith-based beliefs are integral to how mental health issues are perceived and addressed within these communities."
        ]
      },
      {
        title: "Integration of spirituality in therapy",
        points: [
          "Some BIPOC therapists incorporate spiritual and cultural practices into their therapeutic approaches, finding that these methods resonate more deeply with their clients and enhance the effectiveness of therapy."
        ]
      }
    ]
  },
  {
    title: "Generational shifts in openness",
    subthemes: [
      {
        title: "Youth vs. elders",
        points: [
          "A noticeable generational shift is observed in attitudes towards mental health, with younger generations (25 and above) being more open to discussing these issues and breaking taboos upheld by older generations (60+).",
          "This shift is gradually changing the cultural landscape regarding mental health within BIPOC communities."
        ]
      },
      {
        title: "Role of education",
        points: [
          "Education and awareness about mental health are increasing, largely driven by social media and incidental community programs.",
          "These platforms are instrumental in fostering a more open and accepting attitude towards mental health across generations."
        ]
      }
    ]
  },
  {
    title: "Community trust and support",
    subthemes: [
      {
        title: "Trust issues",
        points: [
          "Deep-seated mistrust, a legacy of historical and ongoing oppression, continues to affect BIPOC communities.",
          "This mistrust not only extends towards the mainstream mental health system but also impacts collaboration among professionals within the community."
        ]
      },
      {
        title: "Need for safer spaces",
        points: [
          "The creation of safer spaces where cultural and racial contexts are understood without the need for explanation is crucial for effective healing.",
          "In these spaces, individuals feel validated and supported, which is essential for building trust and fostering community healing."
        ]
      },
      {
        title: "Representation matters",
        points: [
          "Representation in therapy is important. BIPOC clients often prefer therapists who share their cultural and racial background (or have a similar one due to mistrust of the size of their own community) because they feel more understood and validated, which is critical for the therapeutic process."
        ]
      }
    ]
  },
  {
    title: "Systemic barriers and institutional racism",
    subthemes: [
      {
        title: "White supremacy and systemic racism",
        points: [
          "Participants underscored how white supremacy and systemic racism within mental health systems further marginalize and oppress especially Black communities.",
          "These systems reinforce barriers to accessing necessary care, perpetuating cycles of trauma and exclusion."
        ]
      },
      {
        title: "Corporate and institutional control",
        points: [
          "The corporate structure of healthcare often prioritizes profit over the provision of culturally sensitive care.",
          "This profit-driven model makes it difficult for independent BIPOC practitioners to operate without compromising their values, further entrenching inequities within the system."
        ]
      }
    ]
  },
  {
    title: "Healing and identity",
    subthemes: [
      {
        title: "Identity restoration",
        points: [
          "Healing is closely linked to the restoration and affirmation of cultural identity and heritage, which have been disrupted by colonization.",
          "Understanding and embracing one's history and identity are crucial steps in the healing process, as they provide a foundation for mental and emotional well-being."
        ]
      },
      {
        title: "Ancestral practices",
        points: [
          "There is a deep respect for ancestral and indigenous healing practices within BIPOC communities. However, these practices are often co-opted and commodified by mainstream wellness industries, stripping them of their cultural significance and authenticity."
        ]
      }
    ]
  },
  {
    title: "Professional collaboration and support",
    subthemes: [
      {
        title: "Isolation among practitioners",
        points: [
          "Many BIPOC therapists feel isolated in their work, expressing a need for greater collaboration within the community.",
          "Enhanced professional support and collaboration are seen as relevant for improving service provision and client outcomes."
        ]
      },
      {
        title: "Professional training and representation",
        points: [
          "There is a strong call for more culturally competent training for mental health professionals and an increase in the representation of BIPOC professionals within the mental health field.",
          "This is essential for addressing the specific needs of BIPOC communities and ensuring that care is both effective and culturally relevant."
        ]
      }
    ]
  },
  {
    title: "Visions for the future",
    subthemes: [
      {
        title: "Post-colonial future",
        points: [
          "Participants share a vision for a future free from systemic oppression, where access to culturally comprehensive and trauma-informed care is the norm.",
          "This vision involves dismantling existing systemic barriers and creating an inclusive, supportive environment for healing."
        ]
      },
      {
        title: "Advocacy for change",
        points: [
          "Ongoing advocacy for systemic change is seen as critical for achieving this vision.",
          "There is a common need expressed for concerted efforts to challenge and transform the structures that currently limit access to equitable and culturally sensitive mental health care."
        ]
      }
    ]
  }
];

// Get the main circle element by its ID
const mainCircle = document.getElementById('mainCircle');

// Add an event listener to handle the click event
mainCircle.addEventListener('click', () => {
  showMainCircleInfo();
});

// Function to display the information related to the main circle
function showMainCircleInfo() {
  modalContent.innerHTML = `
    <h2>Our openness to healing</h2>
    <p>How systemic oppression, cultural and social factors shape readiness and openness to healing within BIPOC and (forced-) migrant communities in the Netherlands and Belgium.</p>
    <p>This central theme explores the overarching factors that influence the healing journey within these communities, taking into account historical contexts, cultural stigmas and the ongoing impact of systemic barriers.</p>
    <p> <i> Please click on the surrounding circles to delve into specific aspects related to this central theme. </i> </p>
    <p> <b>About the research:</b> 10 Black & POC therapists have been interviewed in July to August of 2024 in a semi-structured format, ranging from 30-60 minutes.</p>
    A thematic analysis has been conducted to crystallize re-occurring themes; the results of the analysis are embedded within a decolonial framework.
    <p> <i> A massive thank you to all participants! - Darius </i>
    <p> This research is copyrighted and not to be replicated or shared in any form. For permission, please contact hooman.nassimi@gmail.com <p>
  `;
  modal.style.display = 'flex';
}




const colors = [
  '#f78da7', '#a3d9ff', '#ffcf71', '#d4a1ff', '#f0f78d', '#a7f7e4', '#f7a7a7'
];

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

themes.forEach((theme, index) => {
  const angle = (index / themes.length) * 2 * Math.PI;
  const radius = 300;
  const x = Math.cos(angle) * radius + window.innerWidth / 2 - 75;
  const y = Math.sin(angle) * radius + window.innerHeight / 2 - 75;

  const themeCircle = document.createElement('div');
  themeCircle.className = 'circle theme-circle';
  themeCircle.style.left = `${x}px`;
  themeCircle.style.top = `${y}px`;
  themeCircle.style.backgroundColor = colors[index % colors.length];
  themeCircle.textContent = theme.title;
  themeCircle.addEventListener('click', () => {
    showModal(theme);
  });

  document.body.appendChild(themeCircle);

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', window.innerWidth / 2);
  line.setAttribute('y1', window.innerHeight / 2);
  line.setAttribute('x2', x + 75);
  line.setAttribute('y2', y + 75);
  line.className = 'line';

  document.body.appendChild(line);
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

function showModal(theme) {
  modalContent.innerHTML = `
    <h2>${theme.title}</h2>
    ${theme.subthemes.map(subtheme => `
      <div>
        <h3>${subtheme.title}</h3>
        <ul>
          ${subtheme.points.map(point => `<li>${point}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  `;
  modal.style.display = 'flex';
}


window.addEventListener('resize', positionCircles);
window.addEventListener('load', positionCircles);

function positionCircles() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const radius = Math.min(window.innerWidth, window.innerHeight) / 3; // Dynamic radius based on screen size
  
  const circles = document.querySelectorAll('.theme-circle');

  circles.forEach((circle, index) => {
    const angle = (index / circles.length) * 2 * Math.PI;
    const x = centerX + Math.cos(angle) * radius - circle.offsetWidth / 2;
    const y = centerY + Math.sin(angle) * radius - circle.offsetHeight / 2;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  });
}
