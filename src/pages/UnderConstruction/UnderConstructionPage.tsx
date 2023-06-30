import { useState, useEffect } from 'react';
import { Countdown } from 'components/CountDown';
import {
  tenth,
  fourth,
  second,
  third,
  fivth,
  sixth,
  seventh,
  eighth,
  seven,
  ninth,
  artist,
  lifestyle,
} from 'assets/Images';
import { Container } from 'react-bootstrap';
import HoverImageContainer from 'components/HoverImageContainer/HoverImageContainer';
import UnderConstructionLeft from './UnderConstructionLeft';
import UnderConstructionRight from './UnderConstructionRight';
import 'scss/main.scss';

function UnderConstructionPage() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    // Create the event handler function
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1033); // Adjust the breakpoint as necessary
    };

    // Immediately invoke the handler to set initial state
    handleResize();

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Return the cleanup function
    return () => {
      // This is the cleanup function. It removes the event listener from the window.
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Countdown
        targetDate={new Date('2023-06-30T00:00:00')}
        initialDays={3}
        initialHours={6}
        initialMinutes={30}
        initialSeconds={60}
      />
      <div className="under__construction__images__main">
        <div className="under__construction__title">
          <h2 id="phases_of_phase_zero">PHASES OF PHASE ZERO</h2>
        </div>
        <div className="under__construction__images__wrapper">
          {isMobile ? (
            <Container>
              <HoverImageContainer
                image={third}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#1 - SEEDS"
                storyDescriptionFirst="This is the story of how a mere comment about lacking vision set in motion a remarkable evolution, leading to the birth of Phase Zero."
                storyDescriptionSecond="Phase Zero, born out of an idea that should never have existed, Just an egoistic move. Exactly like a toddler pushing for something they have no knowledge about. what they would be entering. We started PZ with a leap of faith and some ignorance. "
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={tenth}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#2 - TODDLERS"
                storyDescriptionFirst="We took our first step, much like a toddler starting to walk. We arrived at the mountain, mountains of clothing stacked in piles. Imagine a little child learning how to climb when faced by a mountain that must be overcome without knowing what is coming next. "
                storyDescriptionSecond="The mountains of clothing appeared to be impenetrable. We took our first fearful steps with determination, facing the unknown and descending into the depths of the garment mountain, unaware of the incredible experience that lied ahead of us."
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={second}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#3 - MADE IN MIND"
                storyDescriptionFirst="Wise enough to understand that a great empire can only be built on a strong foundation.  But easier said then done, laying a foundation is difficult."
                storyDescriptionSecond="A strong foundation required strong guidance , and strong guidance demanded tremendous knowledge, which is obtained through vision.  Visions begin to form in the mind, which is where it all originated. The true birthplace of the brand lies within the minds of its creators."
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={fourth}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#4 - ART"
                storyDescriptionSecond="Arts are subjective. I discovered the hard way how tough it is to represent a vision on a canvas (here: fabric). In our desire of perfection, we kept chasing our thoughts in order to make them a reality. To be honest, it wasn't even close. Anyway, trusting the experience and enjoying seeing a toddler grow was what kept us going. "
                storyDescriptionFirst="Phase Zero stands as a symbol of authenticity and originality. Never imagined how difficult it is to be original. "
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={seven}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#5 - ARTISTS"
                storyDescriptionSecond="
                With steady hands, a calm mind, and love, we were witnessing the creation of a masterpiece. What was once just an idea is now a reality in front of us. Who would have guessed that three dumb curious seekers would establish an army dedicated to making a vision a reality.  A curious childish mind has now transformed an imagination into art. "
                storyDescriptionFirst="The following chapter is about artists. The real-life hero. It required a team of artisans to combine the pieces of art and make a masterpiece. "
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={fivth}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#6 - COUNTDOWN "
                storyDescriptionSecond="
                People who were same yet different were crucial for creating uniqueness. We spent two months filming and arranging just how we would present our art.  A genuinely amazing video was produced as a consequence of the knowledge and creativity that each team member contributed. "
                storyDescriptionFirst="Our new normal was abnormality.  The next step was to create something that has never been made before because a masterpiece requires a grand slam. As our collection was ready to hit the market, we realized the importance of a standout marketing strategy that would set us apart making a lasting impression.  We thought about doing something unusual and new, but what?"
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={sixth}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#7 - KICKOFF "
                storyDescriptionSecond="June 17th 12:48am  Our fears were slowing conquer by a sense of achievement as the moment arrived and we saw the launch of our brand. Phase Zero's debut was an extraordinary success, justifying our efforts and increasing our brand's confidence. It was both an artwork and a time of great satisfaction. A minute’s success pays the failure of years."
                storyDescriptionFirst="Days when results are announced can be stressful, especially if they are unknown. On the day when our clothing line was launching we felt a mix of excitement and fear, just like children nervously awaiting their test results. What will be the outcome? The  question kept on arising. "
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={seventh}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#8 - ORIGIN "
                storyDescriptionSecond="We were overjoyed to welcome new members to our growing family after the successful debut of our clothing business, Phase Zero. Despite their internet presence and contributions, however, we had yet to meet them in person. We planned a meetup to close that gap. Everyone involved was invited. Conversations flowed freely as we met, and we exchanged stories, experiences, and hopes. Now the family has grown even bigger. "
                storyDescriptionFirst="The true value of networking doesn’t come from how many people we can meet but rather how many people we can introduce to others. "
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={ninth}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#9 - CULT "
                storyDescriptionSecond="Our studio is where everything takes place. Everything means everything when we say it. Sometimes it's our playground, other times it's our private theater, times it's where we party and gaming is everyday sports here. But more than that we talk concepts, visions, and art; helping each other getting a point of view. Here, criticism that explains why is always welcomed. This is the behind-the-scenes activity that is silently nurturing what you see to be Phase Zero. The weird people there might brainwash you into thinking anything is possible. "
                storyDescriptionFirst="Creating something new is easy but creating something that can last is the real challenge."
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={eighth}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#10 - EVOLVE "
                storyDescriptionSecond="We made a 2:32 minute film for Dashain to show that not all changes are bad—some can even be positive.  This film highlights how far we've come and how far we yet have to go. You have seriously missed something if you haven't watched it. "
                storyDescriptionFirst="Giving back has always been an essential component of phasezero. But what can we really provide as a clothing business?  We decide on an unusual approach for speaking up. To set a benchmark for all we do, we made an effort everything. "
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={artist}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#11 -A FOR ARTIST "
                storyDescriptionSecond="This is what we meant when we said that we wanted to shift the perspectives and present a new point of view. The backstories are equally crazier ; perhaps one day we'll reveal them with you. "
                storyDescriptionFirst="We have once more done our best to provide you with a perspective on sustainability over the entire 3:48min of this video. Our most popular video to date is this one. "
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
              <HoverImageContainer
                image={lifestyle}
                nameOfWrapperClass="hover__image__container__wrapper__two"
                nameOfHoverClass="hover__image__second"
                storyTitle="#12 - PZ-LIFESTYLE "
                storyDescriptionSecond="Through PZ Lifestyle, we want to educate and motivate individuals about how to accessorize with our products with confidence and style. Offering guidance on pairing different pieces, creating unique outfits, and embracing personal flair. "
                storyDescriptionFirst="PZ Lifestyle is more than just a name; it embodies the essence of Phase Zero clothing and the proper way to present it. It goes beyond fashion and becomes a way of life, a philosophy that celebrates individuality, self-expression, and community. "
                nameOfContentClass="hover__image__container__content__two"
                nameOfOverlayClass="hover__image__container__overlay__two"
              />
            </Container>
          ) : (
            <div className="container">
              <div className="row">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                    <UnderConstructionLeft
                      imageTop={tenth}
                      imageBottom={second}
                      storyTitleBottom="#3 - MADE IN MIND "
                      storyDescriptionOneBottom="The mountains of clothing appeared to be impenetrable. We took our first fearful steps with determination, facing the unknown and descending into the depths of the garment mountain, unaware of the incredible experience that lied ahead of us."
                      storyDescriptionTwoBottom="A strong foundation required strong guidance , and strong guidance demanded tremendous knowledge, which is obtained through vision.  Visions begin to form in the mind, which is where it all originated. The true birthplace of the brand lies within the minds of its creators."
                      storyTitleTop="#2 - TODDLERS"
                      storyDescriptionOneTop="We took our first step, much like a toddler starting to walk. We arrived at the mountain, mountains of clothing stacked in piles. Imagine a little child learning how to climb when faced by a mountain that must be overcome without knowing what is coming next. "
                      storyDescriptionTwoTop="Wise enough to understand that a great empire can only be built on a strong foundation.  But easier said then done, laying a foundation is difficult."
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                    <UnderConstructionRight
                      imageTop={third}
                      imageBottom={fourth}
                      storyTitleTop="#1 - SEEDS"
                      storyDescriptionOneTop="This is the story of how a mere comment about lacking vision set in motion a remarkable evolution, leading to the birth of Phase Zero."
                      storyDescriptionTwoTop="Phase Zero, born out of an idea that should never have existed, Just an egoistic move. Exactly like a toddler pushing for something they have no knowledge about. what they would be entering. We started PZ with a leap of faith and some ignorance."
                      storyTitleBottom="#4 - ART"
                      storyDescriptionOneBottom="Phase Zero stands as a symbol of authenticity and originality. Never imagined how difficult it is to be original."
                      storyDescriptionTwoBottom="Arts are subjective. I discovered the hard way how tough it is to represent a vision on a canvas (here: fabric). In our desire of perfection, we kept chasing our thoughts in order to make them a reality. To be honest, it wasn't even close. Anyway, trusting the experience and enjoying seeing a toddler grow was what kept us going. "
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                    <UnderConstructionLeft
                      imageTop={fivth}
                      imageBottom={sixth}
                      storyTitleBottom="#7 - KICK-OFF"
                      storyDescriptionOneBottom="Days when results are announced can be stressful, especially if they are unknown. On the day when our clothing line was launching we felt a mix of excitement and fear, just like children nervously awaiting their test results. The want to miss the day remained. What will be the outcome? The  question kept on arising. "
                      storyDescriptionTwoBottom="June 17th 12:48am  Our fears were slowing conquer by a sense of achievement as the moment arrived and we saw the launch of our brand. We were relieved that our childishness we’ll call had paid off. Phase Zero's debut was an extraordinary success, justifying our efforts and increasing our brand's confidence. It was both an artwork and a time of great satisfaction. A minute’s success pays the failure of years. "
                      storyTitleTop="#6 - COUNTDOWN "
                      storyDescriptionOneTop="Our new normal was abnormality.  The next step was to create something that has never been made before because a masterpiece requires a grand slam. As our collection was ready to hit the market, we realized the importance of a standout marketing strategy that would set us apart making a lasting impression.  We thought about doing something unusual and new, but what?"
                      storyDescriptionTwoTop="People who were same yet different were crucial for creating uniqueness.  Similar to how more batteries produce more energy, more minds generate more ideas. We spent two months filming and arranging just how we would present our art.  A genuinely amazing video was produced as a consequence of the knowledge and creativity that each team member contributed. "
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                    <UnderConstructionRight
                      imageTop={seven}
                      imageBottom={seventh}
                      storyTitleTop="#5 - ARTISTS "
                      storyDescriptionOneTop="The following chapter is about artists. The real-life hero. It required a team of artisans to combine the pieces of art and make a masterpiece. "
                      storyDescriptionTwoTop="With steady hands, a calm mind, and love, we were witnessing the creation of a masterpiece. What was once just an idea is now a reality in front of us. Who would have guessed that three dumb curious seekers would establish an army dedicated to making a vision a reality.  A curious childish mind has now transformed an imagination into art. "
                      storyTitleBottom="#8 - ORIGIN "
                      storyDescriptionOneBottom="The true value of networking doesn’t come from how many people we can meet but rather how many people we can introduce to others. "
                      storyDescriptionTwoBottom="We were overjoyed to welcome new members to our growing family after the successful debut of our clothing business, Phase Zero. Despite their internet presence and contributions, however, we had yet to meet them in person. We planned a meetup to close that gap. Everyone involved was invited. Conversations flowed freely as we met, and we exchanged stories, experiences, and hopes. Now the family has grown even bigger. "
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                    <UnderConstructionLeft
                      imageTop={eighth}
                      imageBottom={artist}
                      storyTitleBottom="#11 - A for Artist"
                      storyDescriptionOneBottom="Our series on 'A for Artists' reflects a belief that art is present all around us, even in places that often go unnoticed. It's a beautiful concept to explore and bring attention to the hidden artistic elements in our everyday lives. Moreover, our series emphasizes the subjective nature of art."
                      storyDescriptionTwoBottom="This series serves as a platform to recognize and appreciate the artistry of our friend Prasanna Neupane who is a singer and a song writer. By providing a space for them to share their creative process, inspirations, and stories, we’re helping to give their art the recognition it deserves. This recognition not only validates their work but also helps to bring it to a wider audience, fostering a greater appreciation for their talents."
                      storyTitleTop="#10 - EVOLVE "
                      storyDescriptionOneTop="Giving back has always been an essential component of phasezero. But what can we really provide as a clothing business?  We decide on an unusual approach for speaking up. To set a benchmark for all we do, we made an effort everything. "
                      storyDescriptionTwoTop="We made a 2:32 minute film for Dashain to show that not all changes are bad—some can even be positive.  This film highlights how far we've come and how far we yet have to go. You have seriously missed something if you haven't watched it. "
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                    <UnderConstructionRight
                      imageTop={ninth}
                      imageBottom={lifestyle}
                      storyTitleTop="#9 - CULT "
                      storyDescriptionOneTop="Creating something new is easy but creating something that can last is the real challenge."
                      storyDescriptionTwoTop="Our studio is where everything takes place. Everything means everything when we say it. More than anything else, it's a place where magic happens. Sometimes it's our playground, other times it's our private theater, times it's where we party and gaming is everyday sports here. But more than that we talk concepts, visions, and art; helping each other getting a point of view. Here, criticism that explains why is always welcomed.  We don’t believe in thinking outside the box, here we believe there’s no box at all. This is the behind-the-scenes activity that is silently nurturing what you see to be Phase Zero. The weird people there might brainwash you into thinking anything is possible. "
                      storyTitleBottom="#12 - PZ LIFESTYLE"
                      storyDescriptionOneBottom="PZ Lifestyle is more than just a name; it embodies the essence of Phase Zero clothing and the proper way to present it. It goes beyond fashion and becomes a way of life, a philosophy that celebrates individuality, self-expression, and community. "
                      storyDescriptionTwoBottom="
                    Through PZ Lifestyle, we want to educate and motivate individuals about how to accessorize with our products with confidence and style. Offering guidance on pairing different pieces, creating unique outfits, and embracing personal flair. "
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <div className="under__construction__wardrobe">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                  <div className="mindxcape">
                    <p>By MindXcape</p>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                  <div className="under__construction__wardrobe__content">
                    <p>
                      We are taking online deliveries all over Nepal from our
                      instagram page @phasezero.clo
                    </p>
                    <button type="button">Explore Instagram Wardrobe</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <Container>
            <div className="under__construction__bottom__section">
              <div className="our__team">
                <p>BY MINDXCAPE</p>
              </div>
              <div className="under__construction__wardrobe__content">
                <p>
                  We are taking online deliveries all over Nepal from our
                  instagram page @phasezero.clo
                </p>
                <button type="button">Explore Instagram Wardrobe</button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default UnderConstructionPage;
