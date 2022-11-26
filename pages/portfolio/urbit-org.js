export default function UrbitOrg() {
    return (
        <div className="container text-white">
            <div className="w-full py-8 min-h-screen max-w-prose flex flex-col space-y-8 font-sans">
                <h2 className="steps text-2xl">Urbit.org + Foundation Design System (2021-)</h2>
                <img className="rounded-xl"
                    src="https://rift.reciprocal.ltd/reciprocal.ltd/urbit-org-full.jpg"
                />
                <p>Matilde wrote both the 2019 and 2021 refreshes of the <a target="_blank" href="https://urbit.org">Urbit.org</a> site.</p>
                <p>After leaving the Tlon Corporation in 2021, Reciprocal on contract developed the Urbit.org website into a family of websites, and componentised its common components into the{" "}
                    <a target="_blank" href="https://github.com/urbit/foundation-design-system">Foundation design system</a>{" "}
                    and introduced more advanced interactions, including:
                    <ul className="list-disc mt-4 list-inside space-y-2">
                        <li>Public ID pages for the entire ecosystem (Urbit IDs, groups, organisations, applications), including server-side generated OpenGraph cards</li>
                        <li>Cross-site searches, surfacing content from each site without a central database</li>
                        <li>A custom <a target="_blank" href="https://markdoc.dev">Markdoc</a> fork, surfacing Urbit-specific components and tags for technical writers</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}