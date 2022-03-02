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
1. The Million Song Dataset (https://academiccommons.columbia.edu/doi/10.7916/D8NZ8J07) . For Hellmeier 1. Our data will be the Million Song Dataset, which is one of the largest datasets within the music informatics field and contains features such as energy, danceability, and loudness.  We will use this paper to interpret metadata for the songs in our dataset-- while the scope of the paper is limited and does not contain features such as genre, we will use other sources to obtain these missing features.

Text for paper: Using features of songs from the Million Song Dataset as well as user feedback, our goal is to develop a music recommender system that will avoid disliked songs. The Million Song Dataset is one of the largest data sets in the music field and contains information such as danceability, as described in Bertin-Mahieux, et al. While the metadata included in the data set lacks certain features such as genre, we will add additional features from other data sources.

2. Investigating Gender Fairness of Recommendation Algorithms in the Music Domain (https://doi.org/10.1016/j.ipm.2021.102666) . For Hellmeier 6. 

Text for paper: One risk of recommender systems is differing performance among demographics--one way to mitigate this risk is to weight responses from different subjects to ensure that each group is equally represented, as described in Melchiorre et al-- while this work focuses on gender as the primary demographic category, we will try to apply the method of re-weighting to other categories such as age and location. 

5. Rating:How Difficult is It? (https://dl.acm.org/doi/10.1145/2043932.2043961) . For Hellmeier 5. There are strengths and shortcomings to different rating methods such as a sliding scale, a thumbs up button, and a five-star scale--this paper suggests that users prefer rating systems that are granular but not too complex. While this paper focuses on a single metric, we may explore rating across several metrics and creating a composite rating.

Text for paper: We will collect user feedback for recommended playlists to measure performance and test our playlist against one from Spotify to compare recommendations.For the best user experience, we will use a five-point rating scale as it has some granularity without being overly complex, as stated in Sparling, et al. We plan to expand on the rating by using multiple metrics rather than a single metric.

### Thai Pham
1. [Kaminskas M., Ricci F., Schedl M. . Location-aware music recommendation using auto-tagging and hybrid matching](https://dl.acm.org/doi/pdf/10.1145/2507157.2507180): 
- a. This paper discusses a hybrid approach to recommend music base on location: explicit label and semantic linkage. Semantic relationshipos are built using knowledge embedding technique to retrieve data from the [DBPedia.org database](https://dbpedia.org/page/Knowledge_base) to link two different types of entities, i.e. songs vs locations. The tags are emotions described by humans evoked by both the songs and the POIs. The paper also presented a combined score to get similarity scores of a song and a location. 
- b. The research presents a possibility of incorporating more contexts in our recommender system in addition to music features and/or users' preferences. There have been a wealth of research demonstrating enhanced performance in terms of developing contextual recommendations. We can explore the use of knowledge-based graph from the same database this research uses to introduce a context-based feature in our model.
- c. Tags are user-inputs and are grouped using limited vocabulary. Different emotions can be understood differently between users. Additionally, the dataset used was very limited: only 25 very well-known tourist attractions. We may not be able to find enough data to introduce a semantic link between locations and music.

2. [Hornung T., Ziegler C., Franz S., Przyjaciel-Zablocki M., Schätzle A., Lausen G. .Evaluating Hybrid Music Recommender Systems](https://ieeexplore.ieee.org/document/6689994):  
- a. This paper incorporates time of listen and a serendipity feature into their model to produce recommendation. The authors laid out an architecture of their recommender sytem which explained how knowledge-based relations were built for users-songs-contexts entities. It then showed how to compute similarity scores for content/metadata (tags)/time of consumption + a seredenpity feature to emphasize novelty of recommendations. 
- b. Similar to paper #1, adding context (in this case, time of use) as a dimension can provide more personalized recommendations. Spotify does provide a music streaming sessions dataset in which we can extract a similar feature. The authors also called out an explainability feature built into their recommendations (and a visual they built to show end users this feature). I believe we can employ similar technique in our deliverable.

3. [Rospocher M. . Explicit song lyrics detection with subword-enriched word embeddings](https://www.sciencedirect.com/science/article/pii/S095741742030573X#bi005): 
- a. This paper reviews an NLP approach to tag explicit content (song lyrics). This research used Facebook AI research FastText classifier in identifying explicit contents. The main advantage of using this linear classifier is it allows for vector representation of a combination of n-gram variations of a word (e.g. "lyrics" includes "ly", "lyr", "lyri", etc.). The author argued that this approach is particularly suitable for song lyrics due to the plethora of spelling variations as well as slangs used in songs. Additionally, this paper also noted that this approach would be computationally more scalable (vectorized computation) compared to previous works leveraging direct keyword tagging.
- b. Since we look to build recommendations of songs that are not suitable/ not liked, an avenue worth exploring is filtering contents that can be offensive. The approach introduced in this research can guide us through how to efficiently incorporate a classifier into our recommender system to group songs into offensive/non-offensive categories. The new feature can then be used in computing our recommendations.
- c. The word-embedding classifer as well as this literature was only done on songs written in English. If we decide to introduce an explicit content classification feature into our system, we will need to limit our dataset to English-only content.


##### Misc
1. [Spotify data sets](https://research.atspotify.com/datasets/): Contains playlists + streaming session data set to help build user preferences as well as context-based data points for music consumption.

2. [DBpedia Knowledge Database](https://dbpedia.org/page/Knowledge_base): Contains knowledge base relations between two entities (e.g. locations vs songs)

3. [Tailoring Music Recommendations to Users by Considering Diversity, Mainstreaminess, and Novelty](https://dl.acm.org/doi/10.1145/2766462.2767763): short paper on incorporating novel features to classify songs in terms of popularity and diveristy of genre/taste.

4. [Explicit Content Detection in Music Lyrics Using Machine Learning](https://ieeexplore.ieee.org/abstract/document/8367165): referenced by #3. This paper uses a dictionary lookup approach to identify explicit content.

### Bo Anderson

### Ryan Maas

1. Algorithmic Effects on the Diversity of Consumption on Spotify
	- a. The main crux of this paper is to illuminate the central tension in music recommendation systems: recommending content that is likely to get users' attention in the short-term while remaining diverse in the long-term. This paper does this by quantifying the musical diversity of a user into a measure called the Generalist-Specialist score. Once that score is calculated, the authors stipulate that things like user-driven and algorithmically-driven diversity become easier to analyze and can lead to deductions into things like churn rate and user subscription tier choices. 
	- b. This paper will be useful for our project because it presents useful context to keep in mind while developing a recommendation algorithm. Maintaining the line between novelty and comfort can lead to more platform adoption.
 	- c. Possible potential shortcomings in this paper are that the data analyzed is limited to Spotify premium members only, thereby creating a possible bias in the data itself. Since we don't intend to consume the dataset as the authors, we will not have a membership tier classifier present in our data or analysis.
 	- Addresses Heilmeier #2 directly, and possibly touches upon #5.

2. Deep Learning in Music Recommendation Systems
	- a. This review article explains particularities of the music domain in recommendation system research. It gives an overview of the state of the art systems that employ deep learning for music recommendation purposes, and this overview touches upon content-based and hybrid approaches, as well as sequence-aware approaches.	
	- b. This paper will be somewhat useful for our project because it presents current approaches in the deep learning realm, which is somewhat out of the wheelhouse of most of the authors. It also denotes current challenges in the deep learning domain, which is something to be privy to should we proceed down that path.
  	- c. Potential shortcomings in this paper are that it limits analysis of approaches in the deep learning domain to a specific niche (music systems), whereas a more generalized approach may be more fruitful for a higher level approach. We do not intend to conduct our own analysis of approaches in the deep learning
  	-  Addresses Heilmeier #2 directly, more or less.

3. Song-Level Features and Support Vector Machines for Music Classification
	- a. This paper goes into depth about training classification models and how they relate to classifying songs. In particular, this paper touches upon support vector machines and how they perform in an experiment that measures classification accuracy, especially in comparison to other model types (such as a k-nearest neighbor model).
	- b. This paper will be a good resource for our project as classification is a possible problem we'll have to solve, and the ability to deduce insights from a smaller dataset and apply them to a larger one (such as ours) could be a good timesaver. More specifically, since our approach intends to create a system that is exclusion-centric, relying on resources that include ways to classify similar data is likely to be prudent.	
  	- c. A few shortcomings in this paper are the size of the dataset sampled (it is only 1200 pop songs) and the types of songs sampled (they are all pop songs). Our dataset will have a much larger dataset and it will have larger array of genres included, so these should be addressed easily.  	
  	- Addresses Heilmeier #2 (how it's done today) tangentially. Possibly addresses Heilmeier #5 (measuring impact/difference). 



[Notion Notes](https://ryanhmaas.notion.site/GA-Tech-CS6242-Paper-Notes-4d471dde115349909334f390bd5007c9)

