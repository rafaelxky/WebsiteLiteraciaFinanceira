export class LangService {
    constructor() {
        this.defaultLang = "en";
        this.localesPath = "/lang";
        this.map = null;
    }

    async GetLanguageMap() {
        const browserLanguage = navigator.language || navigator.userLanguage;
        const langCode = browserLanguage.split("-")[0];

        try {
            // Try fetching the browser language JSON
            const response = await fetch(`${this.localesPath}/${langCode}.json`);
            if (!response.ok) throw new Error("Language file not found");
            const data = await response.json();
            this.map = data;
            return data;
        } catch (err) {
            // Fallback to English
            console.warn(`Language ${langCode} not found, falling back to English`);
            const fallbackResponse = await fetch(`${this.localesPath}/${this.defaultLang}.json`);
            const fallbackData = await fallbackResponse.json();
            this.map = fallbackData;
            return fallbackData;
        }
    }
}