'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const InterviewPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <img 
                src="/images/logo.webp" 
                alt="Jean Philippe Tourigny Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-sm font-light tracking-wide hover:text-gray-300 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>RETOUR</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Interview Content */}
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-thin tracking-widest mb-8">
              JEAN PHILIPPE TOURIGNY
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-8" />
            <p className="text-xl font-light text-gray-300">
              Une lettre à tous ceux qui aiment la couture exceptionnelle et la haute couture<br />
              et aux jeunes créateurs de mode
            </p>
          </div>

          {/* Interview Content */}
          <div className="space-y-12">
            
            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Quand avez-vous réalisé que vous vouliez devenir créateur de mode ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Dès l'enfance, j'ai commencé à dessiner des nus de peintres célèbres et je confectionnais des tenues sur des poupées. Vers 13 ans, j'ai découvert Vogue et redessinais les modèles d'Yves Saint Laurent, photographiés par Richard Avedon et Helmut Newton.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Quelles sont les qualités requises pour être créateur et couturier ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                S'il y a, à mon avis, une qualité essentielle, c'est la passion. Ensuite il y a la question de développer son intuition, sa créativité, sa connaissance du métier et de la technique. Pour le créateur, savoir dessiner me semble essentiel et aussi développer une sensibilité aux couleurs et aux formes. Anticiper les tendances futures et les désirs. Pour le couturier, connaître la technique, la relation entre la coupe et les tissus. Il y a des choses que j'arriverai à exprimer par le dessin et d'autres par le moulage et la coupe. S'habituer à être seul est aussi une qualité importante, la création demande beaucoup de solitude.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                De grands créateurs de mode que vous avez particulièrement admirés ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Mes références sont avant tout historiques et remontent au début du XXe siècle. Au tout début de l'histoire de la haute couture et de la mode. Paul Poiret en 1900, il a supprimé le corset et libéré les femmes avec ses coupes, dont certaines s'inspiraient du caftan marocain. Avec Poiret, j'ai en commun une passion pour l'Orient et les cultures. Madeleine Vionnet et la coupe en biais que j'affectionne particulièrement. Gabrielle Chanel qui a inventé la garde-robe de la femme moderne dans les années 1920 en allégeant et en ajoutant du confort grâce à sa technique, ses coupes et sa façon d'utiliser les matières. Chez Cristobal Balenciaga, j'aime la façon dont il sculpte et joue avec la matière. Chez Elsa Schiaparelli j'adore la fantaisie. Chez Yves Saint Laurent, j'aime la poésie, la sensualité et la magie des couleurs. C'est le grand frère, une passion et une grande histoire de cœur.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Comment décririez-vous votre processus créatif ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Mon processus créatif commence toujours par une émotion, puis il y a la partie technique, le dessin et la coupe. J'anticipe le mouvement, comment la personne va bouger et comment les matières vont réagir au corps et à la lumière.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Quelles sont vos sources d'inspiration ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Les femmes, la faune et la flore, l'art, les cultures, les voyages. J'ai été particulièrement inspiré par un voyage au Japon qui a changé ma façon de concevoir les vêtements. Au Japon, j'ai compris que les créateurs occidentaux travaillent le vêtement verticalement tandis que les orientaux le travaillent horizontalement, comme pour les Caftans, les Saris et les Kimonos. Parfois c'est le tissu qui m'impose sa loi.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Qui est la femme Jean Philippe Tourigny ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Les femmes qui portent mes créations sont des femmes qui recherchent des pièces raffinées, le plus souvent créées pour elles et sur mesure pour des moments importants de leur vie, et des événements prestigieux.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Comment décririez-vous le style Jean Philippe Tourigny ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Élégant, raffiné, poétique, moderne, intemporel et surtout qui met en valeur la silhouette et la femme qui le porte tout en apportant bien-être et confiance.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Qu'est-ce que vous aimez le plus dans votre métier ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Utiliser mes mains et mon esprit pour créer.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Votre meilleur souvenir en mode ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Une tournée au Japon avec plusieurs défilés, à Tokyo, Kyoto et Okinawa.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Quelle est votre mission principale ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Créer de l'émotion, apporter du bien-être et du bonheur.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Qu'est-ce qui vous rend heureux chaque jour ?
              </h2>
              <p className="text-gray-300 font-light leading-relaxed">
                Me réveiller et prendre mon petit déjeuner avec le chant des oiseaux, créer et passer du temps avec les gens que j'aime.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide text-white">
                Votre citation préférée ?
              </h2>
              <blockquote className="text-2xl font-light italic text-center py-8 border-t border-b border-gray-700">
                "Il n'y a pas d'élégance sans élégance du cœur."<br />
                <cite className="text-lg not-italic text-gray-400">— Yves Saint Laurent</cite>
              </blockquote>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/images/logo.webp" 
              alt="Jean Philippe Tourigny Logo" 
              className="h-8 md:h-12 w-auto mx-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              © 2025 Jean Philippe Tourigny. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InterviewPage;