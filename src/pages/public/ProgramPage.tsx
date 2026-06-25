import { motion } from 'framer-motion';
import { Camera, Clock, GlassWater, Mic2, Music, PartyPopper, Trophy, Tv, Users, Video, Wand2 } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { FeatureCard } from '../../components/cards/FeatureCard';
import { program } from '../../mocks/program';
import { staggerContainer } from '../../utils/animations';

const publicAnimations = [
  ['Espace VR', 'Immersion touristique et découverte virtuelle de destinations congolaises.', <Video />],
  ['Quizz interactif YEBA Congo', 'Jeu de connaissance autour des provinces, sites et cultures.', <Wand2 />],
  ['Photobooth thématique', 'Souvenirs visuels et contenus partageables pour les visiteurs.', <Camera />],
  ['Passeport du visiteur', 'Parcours ludique entre stands avec validation des passages.', <Tv />],
  ['Roue de la Fortune', 'Animation participative et lots immédiats.', <PartyPopper />],
  ['Tombola quotidienne', 'Tirage chaque jour pour stimuler la visite des stands.', <Trophy />],
  ['Défilé culturel', 'Mise en valeur des identités et expressions culturelles.', <Users />],
  ['Animations musicales', 'Ambiance live et moments festifs pendant le salon.', <Music />],
];

const proAnimations = [
  ['Happy Hour du Voyage', 'Rencontres rapides entre opérateurs, institutions et partenaires.', <GlassWater />],
  ['Cérémonie des Awards', 'Distinction des initiatives touristiques congolaises remarquables.', <Trophy />],
  ['Soirée Network de clôture', 'Temps fort relationnel pour consolider les opportunités.', <Users />],
  ['Coin Média & Masterclass', 'Interviews, contenus professionnels et sessions d’expertise.', <Mic2 />],
];

export function ProgramPage() {
  return (
    <>
      <PageHero title="Programme & animations" description="Quatre jours de visites de stands, masterclass, cérémonies, tombolas, awards, networking et animations culturelles." />
      <Section title="Timeline par jour">
        <div className="grid gap-6 lg:grid-cols-2">
          {program.map((day) => (
            <motion.article key={day.day} whileHover={{ y: -5 }} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="bg-premium p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{day.day}</p>
                <h2 className="mt-2 text-2xl font-black uppercase">{day.date}</h2>
              </div>
              <div className="mt-6 space-y-4">
                {day.items.map((item) => (
                  <div key={`${day.day}-${item.time}-${item.title}`} className="mx-6 flex gap-4 rounded-2xl bg-mist p-4 last:mb-6">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-turquoise text-white">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-gold">{item.time}</p>
                      <h3 className="font-extrabold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
      <Section muted eyebrow="Grand public" title="Animations visiteurs">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {publicAnimations.map(([title, description, icon], index) => (
            <FeatureCard key={title as string} title={title as string} description={description as string} icon={icon} tone={index % 3 === 0 ? 'gold' : index % 3 === 1 ? 'light' : 'turquoise'} />
          ))}
        </motion.div>
      </Section>
      <Section eyebrow="Professionnels" title="Networking, awards et masterclass">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {proAnimations.map(([title, description, icon], index) => (
            <FeatureCard key={title as string} title={title as string} description={description as string} icon={icon} tone={index % 2 === 0 ? 'dark' : 'gold'} />
          ))}
        </motion.div>
      </Section>
    </>
  );
}
