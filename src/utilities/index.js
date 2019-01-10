export function getOS() {
  let userAgent = null;
  if (typeof navigator !== `undefined`) {
    userAgent = navigator.userAgent || navigator.vendor || window.opera;
  } else {
    // Default undefined behaviour is unknown
    userAgent = "unknown";
  }
  if (/android/i.test(userAgent)) {
    return "android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "ios";
  }
  return "unknown";
}

export function getLang() {
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.includes("tr")) {
      return "tr";
    } else {
      return "en";
    }
  } else {
    return "en";
  }
}

let _localLanguage = null;

export function getLocalLanguage() {
  return _localLanguage;
}

export function setLocalLanguage(lang) {
  if (lang === "en" || lang === "tr") {
    _localLanguage = lang;
  } else {
    _localLanguage = "en";
  }
}
