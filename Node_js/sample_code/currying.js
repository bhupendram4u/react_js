function translate(language) {
    const translations = {
        en: { hello: 'Hello', goodbye: 'Goodbye' },
        fr: { hello: 'Bonjour', goodbye: 'Au revoir' }
    };
    
    if(!translations[language]) return (()=>`Not Founnd Language ${language}`);

    return function(key) {
        return translations[language][key] || `Not Found Key ${key}`; // Default to key if translation not found
    };
}

// Example usage
const translateToEnglish = translate('en');
const translateToFrench = translate('fr');

console.log(translateToEnglish('hello')); // Outputs: 'Hello'
console.log(translateToFrench('goodbye')); // Outputs: 'Au revoir'
const log=console.log
log(translate('en')('hi'))
log(translate('enw')('hi'))