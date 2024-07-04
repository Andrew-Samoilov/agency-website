import pack from '../../../package.json';
const companyName = pack.companyName;

export default function PrivacyPage() {
    return (
        <main>
            <section className="p-6 md:p-12 lg:p-24 ">
                <h1 className="font-semibold text-3xl md:text-6xl lg:text-8xl lg:mr-48 pb-[0.25em] z-10">
                    Our Privacy Policy
                </h1>
                <p><b>{companyName}</b> is committed to protecting your privacy. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.</p>
                <h2 className="font-bold text-xl pb-[0.25em]">Information we collect</h2>
                <ul className="list-disc list-inside">
                    <li>Personal information you provide (e.g., name, email, address)</li>
                    <li>Automatically collected information (e.g., IP address, device information)</li>
                </ul>
                <h2 className="font-bold text-xl pb-[0.25em]">How we use your information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc list-inside">
                    <li>Processing orders and transactions</li>
                    <li>Communicating with you</li>
                    <li>Improving our website and services</li>
                    <li>Sending promotional materials</li>
                </ul>
                <h2 className="font-bold text-xl pb-[0.25em]">Sharing your information</h2>
                <p>We may share your personal information with third parties only for specific purposes outlined in this Privacy Policy.</p>
                <h2 className="font-bold text-xl pb-[0.25em]">Your rights</h2>
                <p>You have the right to access, correct, and delete your personal information. Contact us for assistance.</p>
                <h2 className="font-bold text-xl pb-[0.25em]">Changes to this policy</h2>
                <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page.</p>
                <p className="italic">Last updated: <time>04.07.2024</time></p>
            </section>
        </main>
    )
}
