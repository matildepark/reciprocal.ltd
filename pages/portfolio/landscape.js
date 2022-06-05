export default function Landscape() {
  return (
    <div className="container text-white">
      <div className="w-full py-8 min-h-screen max-w-prose flex flex-col space-y-8 font-sans">
        <h2 className="steps text-2xl">
          Landscape (later: Groups) (2019-2021)
        </h2>
        <p>
          Landscape was <a href="https://tlon.io">Tlon Corporation</a>'s
          flagship product built on the <a href="https://urbit.org">Urbit</a>{" "}
          platform.
        </p>
        <img
          className="rounded-xl"
          src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..15.57.56-original_5ef5d6892515506a74e95258f3168f2a.png"
        />
        <p>
          Designed as a community-first communication suite, it enabled
          permissioned, P2P chats, blogs, and collections as well as user
          profile creation and discovery.
        </p>
        <img
          className="rounded-xl"
          src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..16.18.56-original_f345c127ada3737cbdc6e26c95376ea0.png"
        />
        <p>
          During 2020, after being refactored as a single-page application, it
          was migrated to a "group workspace" format instead of an application
          context format. It was refactored to use the same underlying
          generalised data store, which then introduced features for content
          transclusion and unidirectional reference across each "template". Chat
          messages could be scrapbooked; blog posts linked in any chat. Finally,
          we introduced notifications.
        </p>
        <p>Busy year.</p>
        <img
          className="rounded-xl max-w-full object-contain"
          src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..16.23.02-Screen Shot 2022-06-05 at 9.22.49 AM.png"
        />
        <p>
          The Landscape team was a core team of four; MP performed larger
          front-end migrations (migration to single-page app; developer stream
          with continuous deployment; TypeScript migration), managed the sprint,
          developed sprint specifications in conjunction with executives,
          design, and engineering.
        </p>
        <p>
          All this to say it's a group effort; but it's work that Reciprocal
          Ltd. is familiar with doing and at a calibre we are proud of.
        </p>
        <p>
          For more information, see the following talk about the history of the
          development process:
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XjIDZQUZZtE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ flexShrink: 0 }}
        ></iframe>
        <div className="pb-16" />
      </div>
    </div>
  );
}
