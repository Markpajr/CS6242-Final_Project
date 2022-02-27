# Research Papers

## Data Sources


### Mark Patrick

### Akash Sharma

### Joyce Yang

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
