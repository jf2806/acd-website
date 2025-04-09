import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppdataService {

    trainingData = {
        überschrift: "Training",
        text: "Wir bieten ein breites Trainingsspektrum für verschiedene Altersklassen in der Leichtathletik. Egal, ob Sie Anfänger oder erfahren sind, bei uns können Sie Ihre Fähigkeiten verbessern und Spaß am Sport haben. Familien sind bei uns herzlich willkommen, ob Sie Fragen haben oder einfach Teil unserer Gemeinschaft werden möchten. Wir legen Wert auf den Spaß am Sport und fördern wichtige Werte wie Teamgeist und Durchhaltevermögen. Besuchen Sie uns, um Ihre sportlichen Ziele zu erreichen, unabhängig von Ihrem Erfahrungsniveau.",
        trainingsgruppen: [
            {
                altersklasse: "2008 (ab 12 Jahren)",
                trainer: ["Manfred Müller", "Romeo Contrino", "Holger Fröhlich"],
                training: {
                    sommer: {}
                }
            }
        ]
    }

    constructor(
    ) {}
}
