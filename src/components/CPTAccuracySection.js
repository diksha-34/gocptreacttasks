import React from 'react';

const CPTAccuracySection = () => {
  const items = [
    {
      title: 'Thorough Documentation',
      description: 'Be comprehensive in documenting the history of present illness, an evaluation of systems, and the nature of the presenting problem to paint a complete picture of the patient\'s condition and your clinical assessment.',
      image: 'https://s3-alpha-sig.figma.com/img/1b42/8bd4/6efc2eef8949783675cd36b140ba89ec?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F038DEtz5YvNqot~bu5yJF4HtuX8ySKheqrDjv6FX-yCdm6AL0ltFWJcSZHBgsKvK1sz5qvUyEDLOUjg4Pgtopk~CNn08b0B4ikUfR~ET~AGAE9P9VdyzINf0y8DR4lWzZo487qBR9UplmO47t0Jggvqe2BQpCQnyt-z0xU~Lku2UN95QHbGmXosZRx3-XTBd-ojFuq4tajnsJ3hrsrg7S~pSUzo3f-mAYsAKooPpeJzvqiQ28ITbVLFEGQhvrCayxOkylf2T1LDD1JHeiobUSbYsbXY65hwbatIYR3ocJbrOiFk2QURCFhyLsZ-6d4wfwDgSBwFVo~E84pFBN8ukQ__',
    },
    {
      title: 'Assess Risk and Complexity',
      description: 'Assess Risk and Complexity Evaluate the patient\'s risk and complexity of the condition. The GoCPT app considers risk assessments, all detailed documentation supports accurate code generation.',
      image: 'https://s3-alpha-sig.figma.com/img/50f0/ef41/8a23038e2cb475e6fbd700018af4a1b7?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B3-NnibWnNEAvtXpjnxlLkvB~MZi7qGGlMRAd8FQFZdPKPEbynAepQDAuNF5rO2fxuIMkUZeQ7hO1Yfv5vvQJTL342SHoJ0SsIjVGJgqUz-5F~B2Yxe3OfDexdbY5nPH1F0QoeEX~8OpMEaVta9Mr6vTgBjcxuw6AID9X~DD3jQ~0DK1AFpWLRBY~sC235CjbIm~Aq-N6NPRo1MISfWL1tL~UTye4eG6gkkz2x15HpA72VnXQAyOipeEwc2w7AAJDng0hS9xWLXNw6sklt2sftMmGodYErRu0xpfDDp~Xme1BsVW7QQDc50ciSaQlhbN6hDhwzEmE~d263Pj9YEizQ__',
    },
    {
      title: 'Time-Based Coding',
      description: 'Utilize Time-Based Coding Ensure accurate billing when significant time is spent on patient care. The app can recognize and apply appropriate E&M codes based on time, contributing to accurate billing.',
      image: 'https://s3-alpha-sig.figma.com/img/485e/b02c/afd2ffededdc6d1f30b2778cc4048d86?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YIUOOybGSK1gPVak1tA9oDfGyj0fylEXhpz73cNYhXTd4yOp5H~wJtm-gZYnauhKjBBxUhUWmwYUeUvvfk-yuQgu5RAAO0gVt1JAxtrvh7Qvw94~5-vcN3MgninMbZqKB7yZTAl78bsGU6GZmJY2Pk8zYbvrQKvu2JnoV0MzhdNKoGNkIT6kzOqv8w-0LwpADZ3n4kA3RUaPiawP55huo-91HMSH77~WJ6aVTDOM6UyyegqhF6wh5S8Pjcoro13M0c3RD8~cR~pQjLYEqjUHtpbBm301e2K34fVyg7YBVtgHF40vIXQcUBwzKBydX0MvhjcAycsB7TmGohFvonSzdA__',
    },
    {
      title: 'Specificity Matters',
      description: 'Provide specific details about each service and procedure. The more detailed and specific your documentation, the better the chances of accurate coding and minimizing denials or additional information being required.',
      image: 'https://s3-alpha-sig.figma.com/img/58b0/96f2/93574c11fbb8aa152da072870f5301c6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~YIGENCmevRwU3m0zSXPL9uXZFz2o7Hp~XfZlZj08OJhHJachPkYqDgiUt3aGdQKYQZR-klkvLHYJ~c-yJkS9gCay5sIBgsnxEfDA115ItexhPxsD44fG~gHs5Ei0g6vik0s90rUeZkYW8u-ERtYHKjuamNljLzou8CgQBqsrTg4m9P9WsAJqvquy5fgNAsrrg82JLus~2SGcSXt4d04~usIvClU6u-RjSdLOSeXM-tGYoKT3XVZQYl3-fKbODf7haeIwZaF901T4WhqXRuieN40NUQK7GMqMyFqIQD5n1F2MPmzpC2ZZ-VAJ1~i7JLogigPXIQOh4U8qnLa8l40Q__',
    },
    {
      title: 'Include Relevant Data',
      description: 'Include Relevant Data Ensure that your notes incorporate all relevant information, including tests, assessments, and management options discussed during the encounter. This helps verify and validate the generated codes.',
      image: 'https://s3-alpha-sig.figma.com/img/e456/734c/54ec38d52ac6e1343c81f7a907a562eb?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DB9Rug-H8eyQ1rYxfeaZeIrrlfOW1cmSIM4ALCH5uh0dEVBEe8LYF15JnDPYEoxU5ln-yDvVCIRn5QHtCrUBT-zuSmpWyqvk8qbIB0MhrQZpxxPHD8RBrPtPBSrvPObPdfxvFodEfzQHoOJ1AoIcAdFyoo~y6okqXbV42oW9LnAbFZJ5ezFrg5NYlXJR85dRe5WY8JEgY8zCPrjqmQbpKHjgeEH2YoqcaRviwuBpuMXdbvIAprtq2eaGUbAn4fecDs~cvD601XP14tJzSfeqovLdwGtAqN0m6YtGmoq7c2XqP3YZAnLkheTi8vqz75y4xuOW4fdWh73R3iYSEDdKfA__',
    },
    {
      title: 'Document Thoroughly with All Relevant Data',
      description: 'Ensure that your notes incorporate all relevant information, including tests, assessments, and management options discussed during the encounter. This helps verify and validate the generated codes.',
      image: 'https://s3-alpha-sig.figma.com/img/7125/f43e/9973ceeb59b961b69805e6d651925ce6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AYAQBJA2UcCzUL5QhVtidQwg~ckUp7oJX9uf5hN3VTn90NaNm9hYkBa1REz4fCZ0Xxon-Iu-SYr2tuNNTeBAITUlCgD8WGrVZ-UPlenytsGLL6EdC--ZpE2aUh9r3szpccskWM~MmtZ8Fn1BlBBgqN-b18hK6M086Xw~hkxhuL00ClMOlAUBh7WoOoknL6URbdtEQo0V33Bo1cGR08uK7I6-6l1jLmVIun2x7cwtZvIsr9JJEvgHjgHhfjxR3tF4rhDurBA6QY0qvBuzN18~4o-R8JOf1OdTUSA-b4vXNnblOlIOE50bol9JShkeDWWfQ0ATXuSysaKMgtpmdrZrRw__',
    },
    {
      title: 'Regularly Update the App',
      description: 'Keep the GoCPT app updated to ensure you benefit from the latest enhancements, guidelines, and coding information. Regular updates provide you with accurate and current code suggestions.',
      image: 'https://s3-alpha-sig.figma.com/img/3100/713b/3eb21728d2c6e49cf17eabb237a93933?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XZ4DSIxN4o1dp679EMsw87O6Qma9G33cEagvYYJR-DFR0RdCVDxJQgcBCMxV08Ba39J1055-zySYuowLrJnA2BiuKO8vSV83SS1JTchVSbwTP7pf9~YYJFl3y4cy-hJh64vm7pueSChr2t6Zec6t9wn0-EIZDSNPRwwi5eiSkkjCbqo~YC1qCHs4zq~kyZjLZEQMXY7bjpuqcMxFmQxEe2MmVonTBj7JaLPvt-7PUo7epx79jKizqNTjcUEUMNQx~ax0LaSm8rYKQkeVBgHdnrCbMbs~Sl5AHPxtQxvfAd7p2PZsJO4CzCWTOzZijc9lQlkLv~qsAlwdRUVvojpMHQ__',
    },
    {
      title: 'Stay Informed',
      description: 'Stay Informed Stay abreast of changes in coding guidelines and industry practices. Continuous education and awareness are key to accurate documentation and compliance with current coding requirements.',
      image: 'https://s3-alpha-sig.figma.com/img/4d35/1d77/14e6d360d5e1b75e06e839274d2f991b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqLia0tqd0c07psgLM44fs7tNFZfS~hDVDGahV0OgNDRziGnI9eVtyL2a0ONxkr3fgE4rKBjesZ72eEDydCR16WEIvVrY0~wfoA4pLx7G524SNWO1zdTxqZyOg4zFHQ6fJnnQ-Z1E1x1jqmK60k6vjufUAaP9PxgD4T8EvJT1f0kSv20ilsodcOe0iVBCh2lLuGPlPj4luDD3UYrmth6QXM7mR6a3lye-X3v6bBhJUZ2S3~X9JsWlpD0nJDPcUiyuU-ofbWMRDPkT9vqEevCW6FzdOJUV~4G64yiuHTPBbuDJAUGRp0Bbenx-yvBiwgvFKtYy6fF4nbkPXwuC2UQsw__',
    },
  ];

  return (
    <div className='px-10'>
    <section className="mt-8 w-full max-w-6xl mx-auto border border-stone-100 border-opacity-25 p-8 rounded-lg shadow-2xl">
      <h2 className="text-3xl mb-4 text-center">Ensuring CPT Code Accuracy with <br /> <span className='font-bold'>GoCPT</span> App</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-md">
            <img src={item.image} alt={item.title} className="w-full lg:h-52 h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl text-center font-bold mb-2">{item.title}</h3>
            <p className='text-center'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default CPTAccuracySection;
