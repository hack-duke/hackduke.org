import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About Us | HackDuke</title>
      </Head>
      <Navbar color="#e55511" />
      <div>
        {/* section-is-medium, about-hero */}
        <section
          className="section is-medium font-sans bg-hd-orange bg-[url('/graphics/about.svg')] 
                bg-no-repeat bg-[left_calc(50%)_top_calc(90%)] pt-40 flex justify-center 
                items-center min-h-screen"
        >
          <div className="pl-[5vw] pr-[40vw] lg:px-[5vw]">
            <div
              className="font-semibold text-5xl 
                        text-white mb-8"
            >
              Our Story
            </div>
            <div className="leading-tight font-normal text-xl text-white mb-2">
              HackDuke brings together Duke students with the goal of improving
              meaningful student engagement with the intersection of tech,
              design, and social good.
            </div>
            <div className="leading-tight font-normal text-xl text-white mb-2">
              Through our annual hackathon and designathon, we unite students
              across the globe and encourage them to think critically about the
              role of technology in our communities. Within our Duke/Durham
              community, we host workshops to promote education for all and
              partner with local nonprofits to connect and give back.
            </div>
            <div
              className="text-xl relative p-0 ml-0 mx-auto button bg-white"
              id="about-hero-button"
              style={{ color: "#ffffff" }}
              onClick={() => {
                router.push("/events");
              }}
            >
              More about our events{" "}
              <FontAwesomeIcon
                className="fa-md faicon"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </div>
          </div>
        </section>
        <section className="section is-medium font-sans">
          <div className="px-[5vw]">
            <div className="columns is-desktop is-vcentered">
              <div className="column">
                <div
                  className="font-normal text-[2rem]
                        text-hd-dark-blue mb-3"
                >
                  "Do Something New"
                </div>
                <div className="leading-tight font-normal text-xl text-black mb-2 mt-0">
                  It was 2013, and it started out as HackBlue. A group of 3 Duke
                  and UNC students—Dennis Li, Yang Su, and Katie
                  Hawthorne—organized the first hackathon at Duke to get people
                  excited about learning and creating things outside the
                  classroom.
                </div>
                <div className="leading-tight font-normal text-xl text-black mb-2 mt-0">
                  The vision? Create the first university hackathon experience
                  in the RTP area in providing a unique learning experience
                  where like-minded and driven students come together and create
                  interesting hacks in 24 hours. The event attracted ~100
                  students. Later that year, our organization was renamed to
                  HackDuke and continued to grow.
                </div>
              </div>
              <div className="column">
                <img src="/images/about-1.png" className="rounded-2xl" />
              </div>
            </div>
          </div>
          <div className="pl-[20vw] pr-[15vw] mt-12 mb-20 lg:my-4 lg:px-[5vw]">
            <img src="/images/about-2.png" className="rounded-2xl w-4/5" />
            <img
              src="/images/about-3.png"
              className="rounded-2xl w-3/5 mt-[-20%] ml-[40%]"
            />
          </div>
          <div className="px-[15vw] lg:px-[5vw]">
            <div
              className="font-normal text-[2rem]
                        text-hd-dark-blue mb-3"
            >
              For Social Good
            </div>
            <div className="leading-tight font-normal text-xl text-black mb-2 mt-0">
              In 2014, we introduced the core concept of hacking for social
              good. Local non-profits like the Community Empowerment Fund and
              Durham Cares participated as experts to lead discussions and help
              teams identify community problems and develop meaningful
              solutions.
            </div>
            <div
              className="before:content-['“'] before:font-semibold before:mr-2 
            font-normal text-base text-hd-dark-blue mt-4 after:content-['”'] 
            after:font-semibold after:ml-2 "
            >
              This [hackathon] has inspired more students to work on problems
              that are related to social good. It has also opened the eyes of
              more non-profits of the potential of technology. HackDuke is not a
              solution to society's problems. It's the beginning of the journey
              in identifying them, and exploring the solutions to them.
            </div>
            <div className="font-normal text-base text-hd-dark-blue text-right mt-2">
              — Ashley Qian, 2014 HackDuke Co-director (DukeToday)
            </div>
          </div>
          <div className="px-[20vw] my-12 lg:my-4 lg:px-[5vw]">
            <img
              src="/images/about-4.png"
              className="rounded-2xl w-4/5 ml-[10%] lg:rounded-2xl lg:w-full lg:ml-0"
            />
          </div>
          <div className="px-[15vw] lg:px-[5vw]">
            <div className="leading-tight font-normal text-xl text-black mb-2 mt-0">
              As the hackathon expanded, we continued to engage with the Duke
              community through new initiatives like HackDuke Education, where
              we brought speakers in tech and social justice, educational
              workshops, career panels, and more to the Duke community. By 2016,
              we no longer just hosted hackathons. HackDuke became an umbrella
              organization for multiple projects: Code for Good (the OG
              hackathon), Catalyst (social/pre-professional tech org), and more.
              We became the face of Duke’s tech community, responsible for
              engaging, educating, and inspiring students with both technical
              and non-technical backgrounds.
            </div>
          </div>
          <div className="px-[5vw] my-12 lg:px-[5vw] lg:mb-4">
            <div className="columns is-desktop is-vcentered">
              <div className="column">
                <img
                  src="/images/about-5.png"
                  className="rounded-2xl w-2/5 my-1"
                />
                <img
                  src="/images/about-6.png"
                  className="rounded-2xl w-3/5 ml-[20%] my-1"
                />
                <img
                  src="/images/about-7.png"
                  className="rounded-2xl w-2/5 ml-[60%] my-1"
                />
              </div>
              <div className="column">
                <div
                  className="font-normal text-[2rem]
                        text-hd-dark-blue mb-3"
                >
                  Hello, Ideate!
                </div>
                <div className="leading-tight font-normal text-xl text-black mb-2 mt-0">
                  From HackDuke Education, Ideate was founded by Dorothy Feng
                  and Kiyoon Ko in Spring 2016. The mission of the design
                  thinking and innovation conference is to teach students the
                  importance of design an evolving tech/business world and
                  inspire them to incorporate design thinking as a tool in the
                  problem-solving/innovation process. The conference has
                  introduced so many students to the world of design, inspiring
                  them to pursue design as a career (including this here
                  author).
                </div>
              </div>
            </div>
          </div>
          <div className="px-[5vw] mb-12">
            <div className="columns is-desktop is-vcentered">
              <div className="column">
                <div
                  className="font-normal text-[2rem]
                        text-hd-dark-blue mb-3"
                >
                  Moving Virtual
                </div>
                <div className="leading-tight font-normal text-xl text-black mb-2 mt-0">
                  Of course, we can’t forget 2020. Despite being scattered
                  across the globe, our planning teams were able to successfully
                  organize our annual events online. In July 2020, we hosted our
                  first virtual Ideate, welcoming students from India, South
                  Korea, Philippines, and Puerto Rico. (Durham who? jk we love
                  our city). In December of the same year, we hosted yet another
                  successful Code for Good hackathon.
                </div>
              </div>
              <div className="column">
                <img
                  src="/images/about-8.png"
                  className="rounded-2xl my-1 w-[70%]"
                />
                <img
                  src="/images/about-9.png"
                  className="rounded-2xl my-1 w-[70%] ml-[30%]"
                />
              </div>
            </div>
          </div>
          <div className="px-[15vw] lg:px-[5vw]">
            <div
              className="font-normal text-[2rem]
                        text-hd-dark-blue mb-3"
            >
              What Now?
            </div>
            <div className="leading-tight font-normal text-xl text-black mb-2 mt-0">
              So, that’s a brief history of HackDuke! We are so proud of our
              organization and the growth that has happened the past 8 years.
              From 100 participants from RTP to over 1000 from across the globe,
              HackDuke’s impact has tremendously increased. As an organization,
              we want to continue our growth, to stay true to our core values of
              community through education and innovation for social good, and,
              of course, to have fun through it all.
            </div>
            <div className="leading-tight font-normal text-xl text-black mb-2 mt-0">
              We can’t wait to see where we go! Come along for the journey—you
              won’t regret it.
            </div>
          </div>
          <div className="my-12 px-[20vw] lg:px-[5vw] lg:my-4">
            <img
              src="/images/team-2023.jpeg"
              className="rounded-2xl w-4/5 ml-[10%] lg:w-full lg:ml-0"
            />
          </div>
        </section>
      </div>
      <JoinUs />
      <Footer />
    </>
  );
}
