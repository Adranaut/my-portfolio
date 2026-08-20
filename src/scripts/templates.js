export function generateSkillCardTemplate({
  icon,
  title,
  items,
  isLanguage = false,
}) {
  const itemsTemplate = isLanguage
    ? items
        .map(
          ({ language, certificate, score }) => `
				<div class="lang-item">
					<div class="lang-info">
						<strong>${language}</strong>
						<span class="cert-name">${certificate}</span>
					</div>
					<span class="score-badge">${score}</span>
				</div>
			`,
        )
        .join("")
    : `
				<div class="skill-tags">
					${items.map((item) => `<span>${item}</span>`).join("")}
				</div>
			`;

  return `
		<div class="skill-card${isLanguage ? " language-card" : ""}">
			<div class="skill-header">
				<i class="${icon}"></i>
				<h3>${title}</h3>
			</div>
			${isLanguage ? `<div class="lang-list">${itemsTemplate}</div>` : itemsTemplate}
		</div>
	`;
}

export function generateEducationCardTemplate({
  campus,
  major,
  year,
  stats,
  items,
  image,
  alt,
}) {
  return `
        <div class="education-content">
            <div class="edu-top">
                <h3 class="campus-name">${campus}</h3>
                <p class="major-name">${major}</p>
                <span class="edu-year-pill"><i class="fa-regular fa-calendar"></i> ${year}</span>
            </div>

            <div class="edu-stats-row">
                ${stats
                  .map(
                    ({ isHighlight = false, icon, text }) => `
                    <div class="stat-pill${isHighlight ? " highlight" : ""}">
                        <i class="${icon}"></i>
                        <span>${text}</span>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div class="edu-list-items">
                ${items
                  .map(
                    ({ icon, title, description }) => `
                    <div class="list-row">
                        <i class="${icon}"></i>
                        <div class="list-text">
                            <h4>${title}</h4>
                            <p>${description}</p>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>

        <div class="education-visual">
            <img src="${image}" alt="${alt}" />
        </div>
    `;
}

export function generateTrainingCardTemplate({
  image,
  alt,
  institute,
  program,
  year,
  tags,
  items,
}) {
  return `
        <div class="training-visual">
            <div class="training-image-wrapper">
                <img src="${image}" alt="${alt}" class="training-img" />
            </div>
        </div>

        <div class="training-content">
            <div class="training-header">
                <h3 class="training-institute">${institute}</h3>
                <p class="training-program">${program}</p>
                <span class="training-period-pill"><i class="fa-regular fa-calendar"></i> ${year}</span>
            </div>

            <div class="training-tags">
                ${tags
                  .map(
                    ({ isHighlight = false, icon, text }) => `
                        <span class="tag-pill${isHighlight ? " highlight" : ""}">
                            <i class="${icon}"></i> ${text}
                        </span>
                    `,
                  )
                  .join("")}
            </div>

            <div class="training-details-list">
                ${items
                  .map(
                    (item) => `
                        <div class="training-item">
                            <i class="fa-solid fa-square-check"></i>
                            <p>${item}</p>
                        </div>
                    `,
                  )
                  .join("")}
            </div>
        </div>
    `;
}

export function generateExperienceCardTemplate({
  image,
  alt,
  companyName,
  roleBadge,
  duration,
  situation,
  task,
  action,
  result,
}) {
  return `
        <div class="exp-card">
            <div class="exp-card-header">
                <div class="exp-logo-box">
                    <img src="${image}" alt="${alt}" class="company-logo" />
                </div>
                <div class="exp-role-info">
                    <h3 class="company-name">${companyName}</h3>
                    <span class="role-badge">${roleBadge}</span>
                    <span class="exp-duration"><i class="fa-regular fa-calendar"></i> ${duration}</span>
                </div>
            </div>

            <div class="star-framework">
                <div class="star-item">
                    <span class="star-tag situation">Situation</span>
                    <p>${situation}</p>
                </div>

                <div class="star-item">
                    <span class="star-tag task">Task</span>
                    <p>${task}</p>
                </div>

                <div class="star-item">
                    <span class="star-tag action">Action</span>
                    <p>${action}</p>
                </div>

                <div class="star-item">
                    <span class="star-tag result">Result</span>
                    <p>${result}</p>
                </div>
            </div>
        </div>
    `;
}

export function generateProjectCardTemplate({
  image,
  alt,
  category,
  title,
  description,
  items,
  liveDemo,
  github,
}) {
  return `
        <div class="project-card">
            <div class="project-image-box">
                <img src="${image}" alt="${alt}" />
                <span class="project-category">${category}</span>
            </div>

            <div class="project-content">
                <h3 class="project-title">${title}</h3>
                <p class="project-desc">
                    ${description}
                </p>

                <div class="project-tech-stack">
                    ${items.map((item) => `<span>${item}</span>`).join("")}
                </div>

                <div class="project-btn-group">
                    <a href="${liveDemo}" class="project-btn demo-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                    </a>
                    <a href="${github}" class="project-btn github-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
}

export function generateAchievementCardTemplate({
  icon,
  year,
  title,
  description,
}) {
  return `
        <div class="achievement-item">
            <div class="achieve-marker">
                <i class="${icon}"></i>
            </div>
            <div class="achieve-details">
                <div class="achieve-header">
                    <span class="achieve-year">${year}</span>
                </div>
                <h3 class="achieve-title">${title}</h3>
                <p class="achieve-desc">
                    ${description}
                </p>
            </div>
        </div>
    `;
}
