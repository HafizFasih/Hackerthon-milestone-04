interface ResumeData {
  name: string;
  address: string;
  email: string;
  website: string;
  contact: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  youtube: string;
  about: string;
  education: string;
  work: string;
  html: number;
  css: number;
  javascript: number;
  react: number;
  nextjs: number;
  profileImage?: string;
}

document.getElementById("resumeBtn")?.addEventListener("click", () => {
  const resumeSection = document.querySelector(".resume") as HTMLElement;
  const formSection = document.querySelector(".form") as HTMLElement;

  if (resumeSection && formSection) {
    resumeSection.style.display = "flex";
    formSection.style.display = "none";
  }
});

document.getElementById("customBtn")?.addEventListener("click", () => {
  const resumeSection = document.querySelector(".resume") as HTMLElement;
  const formSection = document.querySelector(".form") as HTMLElement;

  if (resumeSection && formSection) {
    resumeSection.style.display = "none";
    formSection.style.display = "flex";
  }
});

function updateResumeContent(data: ResumeData): void {
  const setText = (id: string, value: string) => {
    const element = document.getElementById(id) as HTMLElement;
    if (element) element.innerText = value;
  };

  setText("resumeName", data.name);
  setText("resumeAddress", data.address);
  setText("resumeEmail", data.email);
  setText("resumeWebsite", data.website);
  setText("resumeContact", data.contact);

  const updateInnerHTML = (id: string, html: string) => {
    const element = document.getElementById(id) as HTMLElement;
    if (element) element.innerHTML = html;
  };

  updateInnerHTML(
    "resumeFacebook",
    `<span class="pic a"></span> <a href="${data.facebook}" target="_blank">Facebook</a>`
  );
  updateInnerHTML(
    "resumeTwitter",
    `<span class="pic b"></span> <a href="${data.twitter}" target="_blank">Twitter</a>`
  );
  updateInnerHTML(
    "resumeLinkedIn",
    `<span class="pic d"></span> <a href="${data.linkedin}" target="_blank">LinkedIn</a>`
  );
  updateInnerHTML(
    "resumeYouTube",
    `<span class="pic c"></span> <a href="${data.youtube}" target="_blank">YouTube</a>`
  );

  updateInnerHTML("resumeAboutMe", data.about);
  updateInnerHTML("resumeEducation", data.education);
  updateInnerHTML("resumeWorkExperience", data.work);

  const setStyleWidth = (id: string, value: number) => {
    const element = document.getElementById(id) as HTMLElement;
    if (element) element.style.width = `${value}%`;
  };

  setStyleWidth("resumeHtml", data.html);
  setStyleWidth("resumeCss", data.css);
  setStyleWidth("resumeJavascript", data.javascript);
  setStyleWidth("resumeReact", data.react);
  setStyleWidth("resumeNextjs", data.nextjs);
  document.getElementById("customBtn")!.innerText = "EDIT";

  const customBtn = document.getElementById("customBtn") as HTMLElement;
  if (customBtn) customBtn.innerText = "EDIT";

  const hobbies = document.getElementById("hobbies") as HTMLElement;
  const developer = document.getElementById("developer") as HTMLElement;

  if (hobbies) hobbies.style.display = "none";
  if (developer) developer.style.display = "none";

  if (data.profileImage) {
    const profileImage = document.querySelector(
      ".profile-image"
    ) as HTMLElement;
    profileImage.style.backgroundImage = `url(${data.profileImage})`;
  }
}

function handleFormSubmit(event: Event): void {
  event.preventDefault();

  const profileImageInput = document.getElementById(
    "profileImage"
  ) as HTMLInputElement;
  let profileImageUrl = "";

  if (
    profileImageInput &&
    profileImageInput.files &&
    profileImageInput.files[0]
  ) {
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>) {
      profileImageUrl = e.target?.result as string;

      const formData: ResumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        address: (document.getElementById("address") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        website: (document.getElementById("website") as HTMLInputElement).value,
        contact: (document.getElementById("contact") as HTMLInputElement).value,
        facebook: (document.getElementById("facebook") as HTMLInputElement)
          .value,
        twitter: (document.getElementById("twitter") as HTMLInputElement).value,
        linkedin: (document.getElementById("linkedin") as HTMLInputElement)
          .value,
        youtube: (document.getElementById("youtube") as HTMLInputElement).value,
        about: (document.getElementById("about") as HTMLTextAreaElement).value,
        education: (document.getElementById("education") as HTMLTextAreaElement)
          .value,
        work: (document.getElementById("work") as HTMLTextAreaElement).value,
        html: parseInt(
          (document.getElementById("html") as HTMLInputElement).value
        ),
        css: parseInt(
          (document.getElementById("css") as HTMLInputElement).value
        ),
        javascript: parseInt(
          (document.getElementById("javascript") as HTMLInputElement).value
        ),
        react: parseInt(
          (document.getElementById("react") as HTMLInputElement).value
        ),
        nextjs: parseInt(
          (document.getElementById("nextjs") as HTMLInputElement).value
        ),
        profileImage: profileImageUrl,
      };

      updateResumeContent(formData);

      const resumeSection = document.querySelector(".resume") as HTMLElement;
      const formSection = document.querySelector(".form") as HTMLElement;

      if (resumeSection && formSection) {
        resumeSection.style.display = "flex";
        formSection.style.display = "none";
      }
    };
    reader.readAsDataURL(profileImageInput.files[0]);
  } else {
    const formData: ResumeData = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      address: (document.getElementById("address") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      website: (document.getElementById("website") as HTMLInputElement).value,
      contact: (document.getElementById("contact") as HTMLInputElement).value,
      facebook: (document.getElementById("facebook") as HTMLInputElement).value,
      twitter: (document.getElementById("twitter") as HTMLInputElement).value,
      linkedin: (document.getElementById("linkedin") as HTMLInputElement).value,
      youtube: (document.getElementById("youtube") as HTMLInputElement).value,
      about: (document.getElementById("about") as HTMLTextAreaElement).value,
      education: (document.getElementById("education") as HTMLTextAreaElement)
        .value,
      work: (document.getElementById("work") as HTMLTextAreaElement).value,
      html: parseInt(
        (document.getElementById("html") as HTMLInputElement).value
      ),
      css: parseInt((document.getElementById("css") as HTMLInputElement).value),
      javascript: parseInt(
        (document.getElementById("javascript") as HTMLInputElement).value
      ),
      react: parseInt(
        (document.getElementById("react") as HTMLInputElement).value
      ),
      nextjs: parseInt(
        (document.getElementById("nextjs") as HTMLInputElement).value
      ),
    };

    updateResumeContent(formData);

    const resumeSection = document.querySelector(".resume") as HTMLElement;
    const formSection = document.querySelector(".form") as HTMLElement;

    if (resumeSection && formSection) {
      resumeSection.style.display = "flex";
      formSection.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const customForm = document.querySelector("form") as HTMLFormElement;
  if (customForm) {
    customForm.addEventListener("submit", handleFormSubmit);
  } else {
    console.error("Form not found");
  }
});
document
  .querySelectorAll("a")
  .forEach((link) =>
    (link as HTMLAnchorElement).setAttribute("target", "_blank")
  );
