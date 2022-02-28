# Research Papers

## Data Sources


### Mark Patrick
1. User Insights on Diversity in Music Recommendation lists
https://program.ismir2020.net/static/final_papers/311.pdf  
	- a. In music recommendation systems, diversity relates to the dissimilarity of recommended items. How users feel about diversity can be situationally dependent, changing based on mood or location. Diversity within a recommender system prevents over personalization, and can be measured via user surveys in addition to algorithmic measures. User surveys allow direct input into how diverse a listener feels the playlist is, which is important in the context of generating recommendations that users find interesting.  
	- b. This paper will be useful for our project as we approach how to determine whether our users are satisfied with the recommended playlists, as well as bringing up the discussion around diversity in the music selection and how we want to incorporate that into our system.
  - c. While this paper focuses specifically on individual users and personalized recommendations, we believe the methodology and ideas can be expanded and applied to a setting such as our project to build recommended playlists for public spaces to minimize conflict in song recommendations.  
	
2. Diversity, Serendipity, Novelty, and Coverage: A Survey and Empirical Analysis of Beyond-Accuracy Objectives in Recommender Systems
https://dl.acm.org/doi/pdf/10.1145/2926720
	- a. Traditional recommender systems have focused on primarily accurate predictions, minimizing the importance of other factors diversity, serendipity, novelty, and coverage. Serendipity is defined as “Finding valuable or pleasant things that are not looked for”, while novelty is a new item previously unknown to the listener. Additionally, coverage represents how well the recommended items cover the catalog of available items.
	- b. This paper will be useful for our project as we approach the issue of how to measure the performance of our recommendation system.
	- c. This paper focuses primarily on measurement of recommender systems, and serves as a jumping point for further research into metrics outside of accuracy.


3. The Information Retrieval Series Music Similarity and Retrieval (Textbook in Slack)
	- a. This is a comprehensive textbook on music recommendation systems. Specifically, the chapter we’re focusing on is chapter 8: Collaborative Music Similarity and Recommendation. Chapter 8 gives us a deep dive into using graph based models to approach music recommendations, scoring based on music similarity.
	- b. This reference will be very useful in our project as we determine the best approach to modeling most dissimilar music from the provided playlist, as we are looking for music that is not anything like the suggested songs.
	- c. This text focuses primarily on analysis the musics lyrics, artists genre & connecting artists, and social relations, while our dataset has additional music metadata we can utilize more related to how the song sounds, beats, rhythm, etc.


### Akash Sharma

### Joyce Yang
1. The Million Song Dataset (https://academiccommons.columbia.edu/doi/10.7916/D8NZ8J07) . For Hellmeier 1. Our data will be the Million Song Dataset, which is one of the largest datasets within the music informatics field and contains features such as energy, danceability, and loudness.  We will use this paper to provide metadata for the songs in our dataset-- while the scope of the paper is limited and does not contain features such as genre, we will use other sources to obtain these missing features.
2. Investigating Gender Fairness of Recommendation Algorithms in the Music Domain (https://doi.org/10.1016/j.ipm.2021.102666) . For Hellmeier 6. One risk of recommender systems is differing performance among demographics--one way to mitigate this risk is to weight responses from different subjects to ensure that each group is equally represented. While this paper focuses on gender as the primary demographic category, we will try to apply the method of re-weighting to other categories such as age and location. 
3. Rating:How Difficult is It? (https://dl.acm.org/doi/10.1145/2043932.2043961)

### Thai Pham
1. [Kaminskas M., Ricci F., Schedl M. . Location-aware music recommendation using auto-tagging and hybrid matching](https://dl.acm.org/doi/pdf/10.1145/2507157.2507180): This paper discusses usage of knowledge embedding technique to retrieve data from the [DBPedia.org database](https://dbpedia.org/page/Knowledge_base) to link two different types of entities, i.e. songs vs locations. The paper presented a combined score to get similarity scores of a song and a location. The three main features include We can follow this paper to map out what features we needed to get location-based not-recommendations.

2. [Hornung T., Ziegler C., Franz S., Przyjaciel-Zablocki M., Schätzle A., Lausen G. .Evaluating Hybrid Music Recommender Systems](https://ieeexplore.ieee.org/document/6689994): This paper incorporates time of listen and a serendipity feature into their model to produce recommendation. The authors laid out an architecture of their recommender sytem which explained how knowledge-based relations were built for users-songs-contexts entities. It then laid out how to compute similarity scores for content/metadata (tags)/time of consumption + a seredenpity feature to emphasize novelty of recommendations. Leaning on the research result (similarity based on time of use outperformed the other features), we can consider extracting time of listen as another context-based feature for our recommender.

3. [Rospocher M. . Explicit song lyrics detection with subword-enriched word embeddings](https://www.sciencedirect.com/science/article/pii/S095741742030573X#bi005): This paper reviews an NLP approach to tag explicit content (song lyrics). This research used Facebook AI research FastText classifier in identifying explicit contents. The main advantage of using this linear classifier is it allows for vector representation of a combination of n-gram variations of a word (e.g. "lyrics" includes "ly", "lyr", "lyri", etc.). The author argued that this approach is particularly suitable for song lyrics due to the plethora of spelling variations as well as slangs used in songs. This research can be used to extract offensive content flag (as a feature) in our recommender.


##### Misc
1. [Spotify data sets](https://research.atspotify.com/datasets/): Contains playlists + streaming session data set to help build user preferences as well as context-based data points for music consumption.

2. [DBpedia Knowledge Database](https://dbpedia.org/page/Knowledge_base): Contains knowledge base relations between two entities (e.g. locations vs songs)

3. [Tailoring Music Recommendations to Users by Considering Diversity, Mainstreaminess, and Novelty](https://dl.acm.org/doi/10.1145/2766462.2767763): short paper on incorporating novel features to classify songs in terms of popularity and diveristy of genre/taste.

4. [Explicit Content Detection in Music Lyrics Using Machine Learning](https://ieeexplore.ieee.org/abstract/document/8367165): referenced by #3. This paper uses a dictionary lookup approach to identify explicit content.

### Bo Anderson

### Ryan Maas

[Notion Notes](https://ryanhmaas.notion.site/GA-Tech-CS6242-Paper-Notes-4d471dde115349909334f390bd5007c9)
