var _a, _b;
(_a = document.getElementById("resumeBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var resumeSection = document.querySelector(".resume");
    var formSection = document.querySelector(".form");
    if (resumeSection && formSection) {
        resumeSection.style.display = "flex";
        formSection.style.display = "none";
    }
});
(_b = document.getElementById("customBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var resumeSection = document.querySelector(".resume");
    var formSection = document.querySelector(".form");
    if (resumeSection && formSection) {
        resumeSection.style.display = "none";
        formSection.style.display = "flex";
    }
});
function updateResumeContent(data) {
    var setText = function (id, value) {
        var element = document.getElementById(id);
        if (element)
            element.innerText = value;
    };
    setText("resumeName", data.name);
    setText("resumeAddress", data.address);
    setText("resumeEmail", data.email);
    setText("resumeWebsite", data.website);
    setText("resumeContact", data.contact);
    var updateInnerHTML = function (id, html) {
        var element = document.getElementById(id);
        if (element)
            element.innerHTML = html;
    };
    updateInnerHTML("resumeFacebook", "<span class=\"pic a\"></span> <a href=\"".concat(data.facebook, "\" target=\"_blank\">Facebook</a>"));
    updateInnerHTML("resumeTwitter", "<span class=\"pic b\"></span> <a href=\"".concat(data.twitter, "\" target=\"_blank\">Twitter</a>"));
    updateInnerHTML("resumeLinkedIn", "<span class=\"pic d\"></span> <a href=\"".concat(data.linkedin, "\" target=\"_blank\">LinkedIn</a>"));
    updateInnerHTML("resumeYouTube", "<span class=\"pic c\"></span> <a href=\"".concat(data.youtube, "\" target=\"_blank\">YouTube</a>"));
    updateInnerHTML("resumeAboutMe", data.about);
    updateInnerHTML("resumeEducation", data.education);
    updateInnerHTML("resumeWorkExperience", data.work);
    var setStyleWidth = function (id, value) {
        var element = document.getElementById(id);
        if (element)
            element.style.width = "".concat(value, "%");
    };
    setStyleWidth("resumeHtml", data.html);
    setStyleWidth("resumeCss", data.css);
    setStyleWidth("resumeJavascript", data.javascript);
    setStyleWidth("resumeReact", data.react);
    setStyleWidth("resumeNextjs", data.nextjs);
    document.getElementById("customBtn").innerText = "EDIT";
    var customBtn = document.getElementById("customBtn");
    if (customBtn)
        customBtn.innerText = "EDIT";
    var hobbies = document.getElementById("hobbies");
    var developer = document.getElementById("developer");
    if (hobbies)
        hobbies.style.display = "none";
    if (developer)
        developer.style.display = "none";
    if (data.profileImage) {
        var profileImage = document.querySelector(".profile-image");
        profileImage.style.backgroundImage = "url(".concat(data.profileImage, ")");
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    var profileImageInput = document.getElementById("profileImage");
    var profileImageUrl = "";
    if (profileImageInput &&
        profileImageInput.files &&
        profileImageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            var formData = {
                name: document.getElementById("name").value,
                address: document.getElementById("address").value,
                email: document.getElementById("email").value,
                website: document.getElementById("website").value,
                contact: document.getElementById("contact").value,
                facebook: document.getElementById("facebook")
                    .value,
                twitter: document.getElementById("twitter").value,
                linkedin: document.getElementById("linkedin")
                    .value,
                youtube: document.getElementById("youtube").value,
                about: document.getElementById("about").value,
                education: document.getElementById("education")
                    .value,
                work: document.getElementById("work").value,
                html: parseInt(document.getElementById("html").value),
                css: parseInt(document.getElementById("css").value),
                javascript: parseInt(document.getElementById("javascript").value),
                react: parseInt(document.getElementById("react").value),
                nextjs: parseInt(document.getElementById("nextjs").value),
                profileImage: profileImageUrl,
            };
            updateResumeContent(formData);
            var resumeSection = document.querySelector(".resume");
            var formSection = document.querySelector(".form");
            if (resumeSection && formSection) {
                resumeSection.style.display = "flex";
                formSection.style.display = "none";
            }
        };
        reader.readAsDataURL(profileImageInput.files[0]);
    }
    else {
        var formData = {
            name: document.getElementById("name").value,
            address: document.getElementById("address").value,
            email: document.getElementById("email").value,
            website: document.getElementById("website").value,
            contact: document.getElementById("contact").value,
            facebook: document.getElementById("facebook").value,
            twitter: document.getElementById("twitter").value,
            linkedin: document.getElementById("linkedin").value,
            youtube: document.getElementById("youtube").value,
            about: document.getElementById("about").value,
            education: document.getElementById("education")
                .value,
            work: document.getElementById("work").value,
            html: parseInt(document.getElementById("html").value),
            css: parseInt(document.getElementById("css").value),
            javascript: parseInt(document.getElementById("javascript").value),
            react: parseInt(document.getElementById("react").value),
            nextjs: parseInt(document.getElementById("nextjs").value),
        };
        updateResumeContent(formData);
        var resumeSection = document.querySelector(".resume");
        var formSection = document.querySelector(".form");
        if (resumeSection && formSection) {
            resumeSection.style.display = "flex";
            formSection.style.display = "none";
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var customForm = document.querySelector("form");
    if (customForm) {
        customForm.addEventListener("submit", handleFormSubmit);
    }
    else {
        console.error("Form not found");
    }
});
document
    .querySelectorAll("a")
    .forEach(function (link) {
    return link.setAttribute("target", "_blank");
});
