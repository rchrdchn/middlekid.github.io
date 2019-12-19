import React from 'react';
import '../App.scss';

const Now = () => (
    <div className="now">
        <div className="now_section">
            <h1>What I’m doing now…</h1>
        </div>
        <div className="now_section">
            <h3>Work <span role="img" aria-label="emoji">👨‍💻</span></h3>
            <p>I've been working at <a rel='noreferrer noopener' href="https://www.successfactors.com/index.html" target="_blank">SAP SuccessFactors</a> as a Frontend Engineer for close to a year.</p>

            <h3>Travels <span role="img" aria-label="emoji">✈️</span></h3>
            <p>I recently lived in Rome, Italy and travelled around Europe visiting friends (Berlin, Munich, Prague, Florence, Geneva, Lausanne, Madrid, and Mallorca). You can follow <a rel='noreferrer noopener' href="https://www.instagram.com/rchrdchn" target="_blank">my journey here</a>!</p>

            <h3>Running ‍<span role="img" aria-label="emoji">🏃‍♂️</span></h3>
            <p>At the end of September, I ran the Berlin marathon, one of the six <a rel='noreferrer noopener' href="https://www.worldmarathonmajors.com/" target="_blank">World Major Marathons</a>. It was a tough tough tough marathon under rainy, windy, and cold conditions! I struggled really hard, but kept pushing until the finish line recording a 4-hour running time.</p>
            
            <h3>Study abroad reunion <span role="img" aria-label="emoji">🇨🇿</span></h3>
            <p>My Hong Kong exchange friends and I recently met up in Prague, Czech Republic for our 5th consecutive study abroad reunion. Previous meetups were: New York '15, San Francisco '16, Barcelona '17, and New York '18.</p>

            <h3>New habits <span role="img" aria-label="emoji">🧘‍♂️</span></h3>
            <p>I’ve doubled down on long-term habits and continued many new habits I started last year: daily meditations, yoga, readings, journaling, and trying to sleep 8 hours. However, I'll add some new ones going forward: no alcohol, reduce the amount of protein in my daily meals, and reduce sugar and coffee intake.</p>

            <h3>Writings <span role="img" aria-label="emoji">📝</span></h3>
            <p>I often write <em>raw thoughts</em> here – it's my scratchpad: <a rel='noreferrer noopener' href="https://notyourtypicalasian.com" target="_blank">https://notyourtypicalasian.com</a></p>
        </div>
        <div className="now_section reads">
            <div className="now_section_reads">
                <h3>Currently reading <span role="img" aria-label="emoji">📚</span></h3>
                <ul>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/2PBamaQ" target="_blank">Homo Deus</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/2SdahMd" target="_blank">Upheaval</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/2S56D6U" target="_blank">Cien Años de Soledad</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/35NAqEY" target="_blank">Medidations</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/2S6LVne" target="_blank">From Ramen to Riches</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/2EyGaqo" target="_blank">My Turn: A Life of Total Football</a></li>
                </ul>
            </div>
            <div className="now_section_reads">
                <h3>Completed <span role="img" aria-label="emoji">📚</span></h3>
                <ul>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/38VGHAv" target="_blank">The Courage to be Disliked</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/35BaiNR" target="_blank">Anything You Want</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/2rS77CO" target="_blank">Sapiens</a></li>
                    <li><a rel='noreferrer noopener' href="https://basecamp.com/shapeup" target="_blank">Shape Up</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/35AiCgx" target="_blank">Daily Stoics</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/38RNtHF" target="_blank">Zen Mind, Beginner's Mind</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/34DNsng" target="_blank">Rich People Problems</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/2S63VxZ" target="_blank">Shoe Dog: A Memoir by the Creator of Nike</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/34CNqfg" target="_blank">The Manual: A Philosopher's Guide to Life</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/38UjpLm" target="_blank">Essentialism: The Disciplined Pursuit of Less</a></li>
                    <li><a rel='noreferrer noopener' href="https://amzn.to/35BM9GH" target="_blank">Ikigai: The Japanese Secret to a Long and Happy Life</a></li>
                </ul>
            </div>
        </div>
        <div className="now_section">
            <p><em>This page was updated Dec 18, 2019. Inspired by <a rel='noreferrer noopener' href="https://sivers.org" target="_blank">Derek Sivers</a> and his <a rel='noreferrer noopener' href="https://sivers.org/now">/now</a> page.</em></p>
        </div>
    </div>
)

export default Now;