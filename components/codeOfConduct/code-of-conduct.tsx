'use client';

import Head from 'next/head';

export default function CodeOfConduct() {
  return (
    <>
      <Head>
        <title>Code of Conduct | CODEx</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-10 flex items-center justify-center">
        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl max-w-4xl w-full p-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            CODEx Community Code of Conduct
          </h1>

          <p className="text-lg text-gray-300 mb-6 text-center">
            We are committed to providing a welcoming and inclusive environment for everyone.
          </p>

          <ul className="space-y-4 text-gray-200 list-disc pl-6">
            <li>
              <strong>Be respectful</strong> – Treat others with kindness, patience, and empathy.
            </li>
            <li>
              <strong>No hate speech</strong> – Any form of discrimination or harassment will not be
              tolerated.
            </li>
            <li>
              <strong>Everyone is welcome</strong> – We celebrate diversity and encourage
              contributions from all.
            </li>
            <li>
              <strong>Use inclusive language</strong> – Avoid slang, jargon, or anything that could
              alienate others.
            </li>
            <li>
              <strong>Help others</strong> – Encourage first-timers and support peers who are
              learning.
            </li>
            <li>
              <strong>Report issues</strong> – If you see something that violates these rules,
              report it to the moderators immediately.
            </li>
            <li>
              <strong>
                Follow the{' '}
                <a
                  href="https://www.contributor-covenant.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline"
                >
                  Contributor Covenant
                </a>
              </strong>{' '}
              – Our conduct is inspired by this community-standard guide.
            </li>
          </ul>

          <div className="mt-10 text-center text-sm text-gray-400">
            Together, we can build a community that’s safe, respectful, and collaborative.
          </div>
        </div>
      </div>
    </>
  );
}
