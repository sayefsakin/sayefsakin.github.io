let resumeData = {};

function switchTab(tabName) {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab pane
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

async function loadResumeData(jsonUrl = 'assets/data/resume.json') {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        resumeData = await response.json();


        // resumeData = JSON.parse(data);
        populateHeader();
        populateEducation();
        populateExperience();
        populateExperience(true);
        populateProjects();
        populatePublications();
    } catch (error) {
        alert('Invalid JSON format. Please check your data and try again.');
        console.error('JSON parsing error:', error);
    }
}

function populateHeader() {
    const basics = resumeData.basics || {};
    
    if (basics.name) {
        document.getElementById('name').textContent = basics.name;
    }
    
    if (basics.label) {
        document.getElementById('label').textContent = basics.label;
    }
    
    if (basics.webSummary) {
        document.getElementById('summary').innerHTML = basics.webSummary;
    }
    
    // Update contact info
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.innerHTML = '';

    let html = '';
    if (basics.profiles && basics.profiles.length > 0) {
        basics.profiles.forEach(profile => {
            if (profile.network && profile.url) {
                if (profile.network === 'Blog') {
                    return;
                }
                html += `<div class="contact-item">`
                html += `<a href="${profile.url}" target="_blank" style="color: inherit; text-decoration: none;">`
                if (profile.logo_path) {
                    html += `<img class='contact-icons' src="${profile.logo_path_web}" alt="${profile.network}">`;
                }
                html += `</a></div>`;
            }
        });
    }
    if (basics.email) {
        html += `<div class="contact-item">`;
        html += `<a href="mailto:${basics.email}" style="color: inherit; text-decoration: none;">`;
        html += `<img class='contact-icons' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Email_Shiny_Icon.svg" alt="email">`;
        html += `</a></div>`;
    }

    contactInfo.innerHTML += html;
    
    // if (basics.email) {
    //     contactInfo.innerHTML += `<div class="contact-item">📧 <a href="mailto:${basics.email}" style="color: inherit; text-decoration: none;">${basics.email}</a></div>`;
    // }
    
    // if (basics.phone) {
    //     contactInfo.innerHTML += `<div class="contact-item">📱 ${basics.phone}</div>`;
    // }
    
    // if (basics.website) {
    //     contactInfo.innerHTML += `<div class="contact-item">🌐 <a href="${basics.website}" target="_blank" style="color: inherit; text-decoration: none;">${basics.website.replace('https://', '').replace('http://', '')}</a></div>`;
    // }
    
    // if (basics.location) {
    //     const location = basics.location;
    //     const locationStr = [location.city, location.region, location.countryCode].filter(Boolean).join(', ');
    //     if (locationStr) {
    //         contactInfo.innerHTML += `<div class="contact-item">📍 ${locationStr}</div>`;
    //     }
    // }
}

function populateEducation() {
    const education = resumeData.education || [];
    const container = document.getElementById('educationContent');
    
    if (education.length === 0) {
        container.innerHTML = '<div class="empty-state">No education data available.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'card education-card';
        // card.style.display = 'flex';
        // card.style.alignItems = 'flex-start';

        // Image section
        const imgDiv = document.createElement('div');
        imgDiv.className = 'education-img';
        // imgDiv.style.marginRight = '20px';
        // imgDiv.style.flex = '0 0 60px';

        // Use edu.image if available, else fallback to a placeholder
        const imgSrc = `images/${edu.logo_path}` || 'https://via.placeholder.com/60x60/667eea/ffffff?text=🎓';
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = edu.alt_name || 'Institution';
        img.style.width = '60px';
        img.style.height = '60px';
        img.style.objectFit = 'scale-down';
        img.style.borderRadius = '8px';

        imgDiv.appendChild(img);

        // Content section
        const contentDiv = document.createElement('div');
        contentDiv.className = 'education-content';
        // contentDiv.style.flex = '1';

        let html = '';
        html += `<div class="education-header"><div class="education-title">`;

        html += `<div class="education-type">`
        if (edu.studyType && edu.area) {
            html += `${edu.studyType} in ${edu.area}`;
        } else if (edu.studyType) {
            html += `${edu.studyType}`;
        } else if (edu.area) {
            html += `${edu.area}`;
        }
        html += `</div>`;

        if (edu.institution) {
            html += `<div class="education-institution"><a href=${edu.url} target="_blank">${edu.institution}</a></div>`;
        }
        html += `</div>`;

        let meta = [];
        if (edu.startDate || edu.endDate) {
            const start = edu.startDate ? new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : '';
            const end = edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present';
            meta.push(`${start ? start + ' - ' + end : end}`);
        }
        // if (edu.gpa) {
        //     meta.push(`🎯 GPA: ${edu.gpa}`);
        // }

        if (meta.length > 0) {
            html += `<div class="meta">${meta.join(' • ')}</div>`;
        }
        html += `</div>`;

        if (edu.summary) {
            html += `<div class="description">${edu.summary}</div>`;
        }

        if (edu.courses && edu.courses.length > 0) {
            html += '<div class="skills">Highlighted Courses: ';
            edu.courses.forEach(course => {
                html += `<span class="skill">${course}</span>`;
            });
            html += '</div>';
        }

        contentDiv.innerHTML = html;

        // Assemble card
        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
        container.appendChild(card);
    });
}

function populateExperience(isInternship = false) {
    let work = resumeData.work || [];
    let container = document.getElementById('experienceContent');
    if(isInternship) {
        work = resumeData.internship || [];
        container = document.getElementById('iexperienceContent');
    }
    
    
    if (work.length === 0) {
        container.innerHTML = '<div class="empty-state">No work experience data available.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    work.forEach(job => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let html = '<div class="volunteer-header-meta"><div class="volunteer-header">';
        
        if (job.position) {
            html += `${job.position}`;
        }
        html += '</div>';

        let meta = [];
        if (job.startDate || job.endDate) {
            const start = job.startDate ? new Date(job.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : '';
            const end = job.endDate ? new Date(job.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present';
            meta.push(`${start ? start + ' - ' + end : end}`);
        }
        if (meta.length > 0) {
            html += `<div class="meta">${meta.join(' • ')}</div>`;
        }
        html += `</div>`;

        if (job.name) {
            html += `<div class="volunteer-header-sub">`;
            if (job.url) {
                html += `<a href="${job.url}" target="_blank" style="color: inherit; text-decoration: none;">${job.name}</a>`;
            } else {
                html += `${job.name}`;
            }
            html += `</div>`;
        }

        if (job.location) {
            html += `<div class="location">🚩 ${job.location}</div>`;
        }
        if (job.summary) {
            html += `<div class="description">${job.summary}</div>`;
        }
        
        if (job.highlights && job.highlights.length > 0) {
            html += '<div class="description"><strong>Key Achievements:</strong><ul style="margin-left: 20px; margin-top: 5px;">';
            job.highlights.forEach(highlight => {
                html += `<li>${highlight}</li>`;
            });
            html += '</ul></div>';
        }
        
        if (job.keywords && job.keywords.length > 0) {
            html += '<div class="skills">';
            job.keywords.forEach(keyword => {
                html += `<span class="skill">${keyword}</span>`;
            });
            html += '</div>';
        }
        
        card.innerHTML = html;
        container.appendChild(card);
    });
    populateVolunteering();
}

function populateVolunteering() {
    const volunteer = resumeData.volunteer || [];
    const container = document.getElementById('vexperienceContent');
    
    if (volunteer.length === 0) {
        container.innerHTML = '<div class="empty-state">No volunteer experience data available.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    volunteer.forEach(job => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let html = '<div class="volunteer-header-meta"><div class="volunteer-header">';
        
        if (job.position) {
            html += `${job.position}`;
        }
        html += `</div>`;

        let meta = [];
        if (job.startDate || job.endDate) {
            const start = job.startDate ? new Date(job.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
            const end = job.endDate ? new Date(job.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Present';
            meta.push(`${start ? start + ' - ' + end : end}`);
        }
        
        if (meta.length > 0) {
            html += `<div class="meta">${meta.join(' • ')}</div>`;
        }
        html += `</div>`;

        if (job.organization) {
            html += `<div class="volunteer-header-sub">`;
            if (job.url) {
                html += `<a href="${job.url}" target="_blank" style="color: inherit; text-decoration: none;">${job.organization}</a>`;
            } else {
                html += `${job.organizationy}`;
            }
            html += `</div>`;
        }

        if (job.location) {
            html += `<div class="location">🚩 ${job.location}</div>`;
        }
        
        if (job.summary) {
            html += `<div class="description">${job.summary}</div>`;
        }

        
        if (job.highlights && job.highlights.length > 0) {
            html += '<div class="description"><strong>Key Achievements:</strong><ul style="margin-left: 20px; margin-top: 5px;">';
            job.highlights.forEach(highlight => {
                html += `<li>${highlight}</li>`;
            });
            html += '</ul></div>';
        }
        
        if (job.keywords && job.keywords.length > 0) {
            html += '<div class="skills">';
            job.keywords.forEach(keyword => {
                html += `<span class="skill">${keyword}</span>`;
            });
            html += '</div>';
        }
        
        card.innerHTML = html;
        container.appendChild(card);
    });
}

function populateProjects() {
    const projects = resumeData.projects || [];
    const container = document.getElementById('projectsContent');
    
    if (projects.length === 0) {
        container.innerHTML = '<div class="empty-state">No projects data available.</div>';
        return;
    }
    
    container.classList.add('project-grid');
    container.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';

        let html = '';
        if(project.demo) {
            html += `<div style="text-align: center; margin-bottom: 10px;">`;
            if(project.detailedDemo) {
                html += `<a href="${project.detailedDemo}" target="_blank" style="color: inherit; text-decoration: none;">`;
            }
            html += `<img src="${project.demo}" alt="${project.name}" style="width: 100%; height: auto; border-radius: 8px;"/>`;
            if(project.detailedDemo) {
                html += `</a>`;
            }
            html += `</div>`;
        }
        
        html += '<div class="volunteer-header-meta"><div class="volunteer-header">';
        
        if (project.name) {
            if (project.url) {
                html += `<a href="${project.url}" target="_blank" style="color: inherit; text-decoration: none;">${project.name}</a>`;
            } else {
                html += `${project.name}`;
            }
        }
        
        html += `</div>`;

        let meta = [];
        if (project.startDate || project.endDate) {
            const start = project.startDate ? new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : '';
            const end = project.endDate ? new Date(project.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present';
            meta.push(`${start ? start + ' - ' + end : end}`);
        }
        if (project.type) {
            meta.push(`🏷️ ${project.type}`);
        }
        
        if (meta.length > 0) {
            html += `<div class="meta">${meta.join(' • ')}</div>`;
        }
        html += `</div>`;
        
        if (project.description) {
            html += `<div class="description">${project.description}</div>`;
        }

        if (project.roles && project.roles.length > 0) {
            html += `<div>${project.roles.join(', ')}</div>`;
        }
        
        if (project.webHighlights && project.webHighlights.length > 0) {
            html += '<div class="description"><strong>Key Features:</strong><ul style="margin-left: 20px; margin-top: 5px;">';
            project.webHighlights.forEach(highlight => {
                html += `<li>${highlight}</li>`;
            });
            html += '</ul></div>';
        }
        
        if (project.keywords && project.keywords.length > 0) {
            html += '<div class="skills">';
            project.keywords.forEach(keyword => {
                html += `<span class="skill">${keyword}</span>`;
            });
            html += '</div>';
        }
        
        card.innerHTML = html;
        container.appendChild(card);
    });
}

function populatePublications() {
    let work = resumeData.publications || [];
    let container = document.getElementById('publicationContent');
    
    if (work.length === 0) {
        container.innerHTML = '<div class="empty-state">No publication data available.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    work.forEach(pub => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let html = '<div class="volunteer-header-meta"><div class="volunteer-header">';
        
        if (pub.name) {
            if (pub.url) {
                html += `<a href="${pub.url}" target="_blank" style="color: inherit; text-decoration: none;">${pub.name}</a>`;
            } else {
                html += `${pub.name}`;
            }
        }
        html += '</div>';

        let meta = [];
        if (pub.releaseDate) {
            html += `<div class="meta">${pub.releaseDate}</div>`;
        }
        html += `</div>`;
        if (pub.publisher) {
            html += `<div class="volunteer-header-sub">${pub.publisher}</div>`;
        }
        if (pub.summary) {
            html += `<div class="description">${pub.summary}</div>`;
        }
        
        card.innerHTML = html;
        container.appendChild(card);
    });
}

// Initialize with empty state
document.addEventListener('DOMContentLoaded', function() {
    // Set up initial state
    loadResumeData();
});