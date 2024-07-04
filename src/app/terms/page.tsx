import pack from '../../../package.json';
const companyName = pack.companyName;

export default function TermsPage() {
    return (
        <main>
            <section className="p-6 md:p-12 lg:p-24 ">
                <h1 className="font-semibold text-3xl md:text-6xl lg:text-8xl lg:mr-48 pb-[0.25em] z-10 ">
                    Terms of Service
                </h1>
                <p>By accessing our Website, you agree to be bound by these terms of service. Please read them carefully.</p>
                <h2 className="font-bold text-xl pb-[0.25em]">Intellectual Property</h2>
                <p>All content on this site, including text, graphics, logos, icons, and images, is the property of <b>{companyName}</b> and is protected by international copyright laws.</p>
                <h2 className="font-bold text-xl pb-[0.25em]">User Conduct</h2>
                You agree not to engage in any activity that may disrupt or interfere with the proper functioning of this site. This includes unauthorized access to our systems.
                <h2 className="font-bold text-xl pb-[0.25em]">Disclaimer</h2>
                <b>{companyName}</b> provides this site as-is and makes no representations or warranties of any kind, expressed or implied. Your use of this site is at your own risk.
                <h2 className="font-bold text-xl pb-[0.25em]">Changes to these terms</h2>
                <p>We reserve the right to update or change these terms of service at any time. Your continued use of the site after any such changes constitutes your acceptance of the new terms.</p>
                <p className="italic">Last updated: <time>04.07.2024</time></p>
            </section>
        </main>
    )
}
