# Research Papers

## Data Sources
1. Freeman, J. M., DiOrio, N. A., Blair, N. J., Neises, T. W., Wagner, M. J., Gilman, P., & Janzou, S. (2018). System Advisor Model (SAM) general description (version 2017.9. 5) (No. NREL/TP-6A20-70414). National Renewable Energy Lab.(NREL), Golden, CO (United States).

The System Advisor Model (SAM) from the National Renewable Energy Lab provides data on renewable energy sources such as geothermal, wind, and solar power. It has an API that is compatible with Python at https://sam.nrel.gov/software-development-kit-sdk/pysam.html . 


## Geothermal Energy

### Mark Patrick

   1. Deep Direct-Use Geothermal Feasibility Study for Hawthorne, NV
        -- https://www.osti.gov/biblio/1606296
        -- Indepth research paper on feasibility in a specific area, including return on investment calculations on page 65, information on regulations, permits, demand, and output analysis.
   2. Evaluating the feasibility of geothermal deep direct-use in the United States
        --https://www.sciencedirect.com/science/article/pii/S0196890421005112?via%3Dihub
        -- Geothermal Feasibility study done across the entire US, modeling costs based on different scenarios and some comparisons to other energy sources.
   3. 2021 U.S. Geothermal Power Production and District Heating Market Report
        -- https://nrel-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=NREL_ALMA5146004430003216&context=L&vid=Pubs&lang=en_US&search_scope=PUBS&adaptor=Local%20Search%20Engine&tab=default_tab&query=any,contains,geothermal&sortby=date&offset=0
        -- Has a few nice sections discussing the amount of geothermal energy output from 2015-2019, with breakdowns by state and long term growth opportunities

### Akash Sharma

## Solar Energy

### Joyce Yang

1. Gagnon, P., Margolis, R., Melius, J., Phillips, C., & Elmore, R. (2018). Estimating rooftop solar technical potential across the US using a combination of GIS-based methods, lidar data, and statistical modeling. Environmental Research Letters, 13(2), 024027.

2.  Margolis, R., Gagnon, P., Melius, J., Phillips, C., & Elmore, R. (2017).     Using GIS-based methods and lidar data to estimate rooftop solar technical potential in US cities. Environmental Research Letters, 12(7), 074013. 

3. Gagnon, P., Margolis, R., Melius, J., Phillips, C., & Elmore, R. (2016). Rooftop solar photovoltaic technical potential in the United States. A detailed assessment (No. NREL/TP-6A20-65298). National Renewable Energy Lab.(NREL), Golden, CO (United States).

These articles address rooftop photovoltaic potential in the US based on a combination of solar exposure, forest cover, and other factors. Notably, they do not consider non-rooftop photovoltaic potential. 

### Thai Pham
1. [Cornelia A., Fjelkestam Frederiksen, Zuansi Cai (2021).Novel machine learning approach for solar photovoltaic energy output forecast using extra-terrestrial solar irradiance](https://www.sciencedirect.com/science/article/abs/pii/S0306261921014276): This paper discusses a neural network approach to predict one-week-ahead half-hourly photovoltaic power output using climate data with examples in U.K. 

2. [Sobrina Sobri, Sam Koohi-kamali, Nasrudin Abd. Rahim (2018).Solar photovoltaic generation forecasting methods: A review](https://www.sciencedirect.com/science/article/abs/pii/S0196890417310622): A survey of PV forecasting techniques. From the summary, it seems they review time series analysis, ensemble methods, and classification techniques to forecast output. There is also review of metrics assessment of prediction performance.

3. [Justin Brewer, Daniel P.AMes, David Solan, Randy Lee, Juliet Carlisle (2015). Using GIS analytics and social preference data to evaluate utility-scale solar power site suitability](https://www.sciencedirect.com/science/article/abs/pii/S0960148115002979): This paper discusses a GIS-based approach by interlaying map with details of potential irradiance + a layer for roads/power lines to produce a map showing solar energy potential with scale across southwestern US.


##### Misc
1. [Top 5 sources for solar data](https://www.nrel.gov/state-local-tribal/blog/posts/top-five-sources-for-solar-data-available-at-eia.html): This one is only for short write-ups plus quick visualisations ref. That being said, there's EIA's State Energy Data System where you can state-specific maps, rankings, or location of geothermal/hydro/solar/wind plants which i think can interlay? The webpage also has a source for annual and monthly electricity installed capacity per state.

2. [Solar maps](https://www.nrel.gov/gis/solar-resource-maps.html) and [US National Solar Radiation Database](https://nsrdb.nrel.gov/about/u-s-data.html): The former is gallery of maps and latter is where the data come from. They have dictionary of what columns are present, e.g. dew point, snow depth, temperature, etc.

3. [SAM technical reference](https://www.nrel.gov/docs/fy18osti/67399.pdf)

## Wind Energy - aka Best Team

### Bo Anderson


[Fueyo, N., Sanz, Y., Rodrigues, M., Montañés, C. and Dopazo, C. (2010), High resolution modelling of the on-shore technical wind energy potential in Spain. Wind Energ., 13: 717-726. https://doi.org/10.1002/we.392](https://onlinelibrary.wiley.com/doi/epdf/10.1002/we.392)

Talks about calculating the method for the wind energy potential in Spain.

[Where, when and how much wind is available? A provincial-scale wind resource assessment for China](https://www.sciencedirect.com/science/article/pii/S0301421514004078)

Provides a formula for coming up with Wind Energy potential by using wind speed, slope factor and bathymetry(???).

[Schwartz, M, George, R, and Elliott, D. The Use of Reanalysis Data for Wind Resource Assessment at the National Renewable Energy Laboratory. United States: N. p., 1999. Web.](https://www.osti.gov/servlets/purl/7074)

Talks about NREL's efforts to do wind energy potential analysis. Everything talks about using models and GIS data, but I haven't found the models or the underlying data yet.

[C. McKeown, A. Adelaja, B. Calnin
On developing a prospecting tool for wind industry and policy decision support
Energ Policy, 39 (2) (2011), pp. 905-915](https://www.sciencedirect.com/science/article/pii/S0301421510008396#bib9)

Provides useful list and framework for availability potential for wind energy.

|Data | Proxy for | Possible index score |
|---|---|---|
|Wind speed score | Wind density for power generation | 350 |
|Agricultural land contiguity and area | The number of towers that can be strung together in a reasonably compact setting | 180 |
|Forest land contiguity and area | The number of towers that can be strung together in a reasonably compact setting | 130 |
|Per acre value of agricultural land | Land Costs | 130 |
|Population density: 2000 | Possible local resistance to wind farm installation | 130 |
|Population density change: 1990–2000 | Pressure for residential and other types of development | 80 |
|Total possible | | 1000 |

Also references this poster

[Poster for Wind Energy Potential](https://www.nrel.gov/docs/fy10osti/48036.pdf)

### Ryan Maas

[Notion Notes](https://ryanhmaas.notion.site/GA-Tech-CS6242-Paper-Notes-4d471dde115349909334f390bd5007c9)

[Land use and turbine technology influences on potential in the United States](https://www.sciencedirect.com/science/article/abs/pii/S0360544221002930)

This paper discusses siting restrictions and turbine development and how both affect wind capacity in various regions in the US.

[Expert Elicitation Survey on Future Wind Energy Costs. Article No. 16135 NREL/JA-6A20-66669](https://www.nature.com/articles/nenergy2016135)

Brief writeup of a survey aimed at industry experts (largest of its kind, at least related to wind specifically) aiming to gather sentiment related to future energy costs.
