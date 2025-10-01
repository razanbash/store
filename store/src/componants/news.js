import React  from "react";
import '../style/products.css';
import { Link } from "react-router-dom";
// import SubProducts from "./subProduct";


export default function News(){

    // const [showImage,setShowImage] = React.useState('no')
    const [theme,setTheme] = React.useState('light')

  
    // const handleClike = () => {
    //  if(showImage == 'no'){
    //     setShowImage('yes')
    //  }else{
    //     setShowImage('no')
    //  }
    // }

    const [changebtn ,setchangebtn] = React.useState('change to dark')
    const toggleTheme = () => {
       if (theme === 'light'){
        setTheme('dark')
        setchangebtn('change to light')

       }else{
        setTheme('light')
        setchangebtn('change to dark')
       }
    }


      // a list of main product and list of sub products
 
      var subProducts =[
        {id:1,
        name:'Gaza Strip',
        MoreImages:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tGuPmqAprW6xUGCQ2WUK9w750zrnJOXCWQ&s",
            "https://www.rescue.org/sites/default/files/styles/square_1x1_1280px_wide/public/2024-07/GettyImages-2087311875-1201x800-5b2df79.jpg?itok=avObvte1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNVucYFKbIkdHAYuQEA0v0C3x6t44gelVrd29WM_LnC7mAwYy3xWtG2ALLSRAnnzs46c&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFQxtsYfUAGb0y1NztaC7Lt1aKPkTIxqfii-0E31eKKHgYNaU4vpp43O6mltoFuO4AS0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkiTmWn7nDA3t_GRuJAj7fZG-Fyjfo1ifQg&s"
            
        ],
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptdaah3epLAeV4RQL8908SA5FGuXPGpEqcQ&s',
        discrption:'Over the past several weeks the humanitarian emergency in the Gaza Strip has escalated into one of the worst crises in recent history, and over the last few days in particular the situation has sharply deteriorated. Northern Gaza, already devastated by months of bombardment and siege, has now slipped into confirmed famine conditions following the closure of the Zikim aid corridor on September 12, which cut off roughly half of all food shipments from the World Food Programme and other relief agencies. This single chokepoint has rippled outward to collapse an entire fragile food system: community kitchens that once served hundreds of thousands of meals daily are shuttered; neighborhood bakeries have no fuel or flour; people who once received food parcels every few days are now waiting weeks; and mothers report boiling weeds or animal feed to keep their children alive. With clean water sources nearly exhausted and fuel deliveries throttled, desalination plants and water pumps have gone offline, leading to widespread use of contaminated water and the resurgence of water-borne diseases. Health care is in free fall: Gaza’s hospitals — already operating at double or triple capacity — are now so overcrowded that patients lie on floors or in corridors, and essential medicines such as antibiotics, anesthesia, and dialysis supplies are running out. Incubator units are a flashpoint of global concern, especially around Al Helo Hospital in Gaza City, where ongoing shelling damaged the facility and forced doctors to consider evacuating at least two dozen premature infants despite no safe transport available; many of these babies are on the brink of death if electricity or oxygen runs out. In the south, refugee camps that once served as “safe zones” are swelling with displaced families fleeing the north, creating a crush of people living under plastic sheets with almost no food, water, or sanitation. Malnutrition rates among children and pregnant women are skyrocketing; doctors report visible muscle wasting, swollen bellies, and lethargy consistent with advanced starvation. International efforts to break the blockade are underway: a flotilla of aid vessels is sailing east toward Gaza under the protection of Turkish surveillance drones, hoping to deliver desperately needed food, medicine, and fuel. Yet the political backdrop remains gridlocked. U.S., Israeli, and regional leaders are discussing a possible ceasefire and hostage-release deal, but no concrete breakthrough has emerged, and humanitarian actors warn that even a short pause would not be enough to repair months of devastation. Meanwhile, civil society in Gaza is disintegrating under the weight of siege and bombardment: schools are closed or destroyed, local markets are empty, and the social fabric that once held communities together is fraying as survival instincts take over. Families describe living day to day with no guarantee of their next meal, no functioning clinic, and no certainty of safety from airstrikes. Aid officials warn that without immediate large-scale deliveries of food, fuel, medical supplies, and clean water, Gaza faces mass starvation, preventable disease outbreaks, and a total collapse of what little remains of its infrastructure — a spiraling catastrophe that deepens with each passing day. '},
        // news 2
        {
        id:2,
        name:'Donald Trump',
        MoreImages:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FSAB-Xsnkdkb4WEVfgPUXBXnGVxEDE1jsw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FSAB-Xsnkdkb4WEVfgPUXBXnGVxEDE1jsw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tWj1zzhp8xvUdGU5E_bJVJ6MwadrKTs3YQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkvjwuzlJY99qFcmbBopBO1Pkr1TIdBsrZQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSofMPpYOh-cr6yxtK7l_lZVsGAGFduV7ISg&s",
            
        ],

        img:'https://hips.hearstapps.com/hmg-prod/images/donald-trump-photo-by-scott-olsongetty-images.jpg?resize=980:*',
        discrption:'Over the past week, former President Donald Trump dominated national and international headlines with a cascade of actions, policies, and controversies that underscored both his combative style and his sweeping ambitions for reshaping U.S. policy. In a series of economic moves, Trump announced a 100 percent tariff on foreign-made films, portraying the measure as a way to “protect American culture and jobs” from what he described as unfair competition abroad, while simultaneously unveiling plans to boost U.S. coal production despite widespread environmental and market challenges, signaling a return to more traditional energy sources and an aggressive rollback of climate-oriented policies. Domestically, tensions between Trump and congressional leaders deepened as a potential government shutdown loomed at the end of the fiscal year; he abruptly canceled a scheduled budget meeting with Democratic leaders, escalating partisan gridlock and leaving federal agencies bracing for funding lapses. At the same time, the U.S. Supreme Court handed him a major victory by affirming his authority to withhold $4 billion in foreign aid already approved by Congress, a ruling that strengthened executive power over spending and set a precedent for future presidents. Trump also broadened his administration’s controversial crackdown on what he calls “organized political violence,” ordering federal agencies to investigate funding networks and philanthropic ties associated with protests and left-leaning groups—an approach critics warn could erode civil liberties and weaponize law enforcement against political dissent. On the foreign policy front, Trump hosted Israeli Prime Minister Benjamin Netanyahu at the White House and publicly claimed that a Gaza ceasefire deal and a large hostage release were close at hand, seeking to position himself as a dealmaker capable of resolving one of the world’s most intractable conflicts, even as skeptics in Washington and the Middle East questioned the realism of his assertions. His week also included a combative address at the United Nations, where he criticized the global body as ineffective, scolded international partners for what he views as freeloading on U.S. power, and reasserted his nationalist “America First” agenda to the global stage. Beyond these headline items, Trump’s communications strategy added fuel to the controversy when he posted and quickly deleted an AI-generated video promoting a conspiracy theory about futuristic healing “medbeds,” prompting intense backlash and renewed debate about misinformation and presidential responsibility in the digital age. Meanwhile, he prepared to attend a high-profile military gathering at Quantico with top U.S. generals, a move interpreted by some as an attempt to exert influence over the armed forces and by others as routine engagement with the military establishment. Taken together, the week painted a portrait of a political figure doubling down on hardline economic policies, confrontational international stances, and a sweeping effort to centralize executive authority while simultaneously navigating mounting criticism, legal challenges, and deepening divisions within the country.'},
        


        // news 3
        {id:3,
        name:'Erdogan',
        MoreImages:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tEPfeOnYCmU-PDJFXCbEqbnVwOIUyhAS3A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlIoa7gF7NlFBO8Xd9nwgOaQw1d97dfmx5g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2TH3QusL9by4hk14hvnOGLwQCsr-66DE_fw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM137_lrQm7I_mJBeeHZj-fdDEyV417xzmmA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwoaOPskpc0kyMapUnW2i7JONiQt-7ulbuw&s"
        ],
        
        
        
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2Ba1sURDSLIgDtXNrf5jbhYmptmntks3TQ&s',discrption:'Over the past week, President Recep Tayyip Erdoğan has pursued a complex and high-stakes agenda that spans international diplomacy, defense deals, domestic consolidation of power, and regional strategy, signaling both his ambition and his increasingly assertive leadership style. On the international front, Erdoğan positioned Turkey as a key mediator in the Gaza conflict, traveling to Washington to meet with U.S. President Donald Trump, Israeli officials, and Arab envoys to negotiate a potential ceasefire and longer-term political arrangements, publicly endorsing a two-state solution and offering Turkey as one of the few powers able to engage all parties simultaneously, while pledging increased humanitarian aid, including dispatching relief vessels and drones to monitor a Mediterranean flotilla. At the same time, he leveraged the visit to negotiate billions of dollars in aircraft and defense deals, including Boeing airliners, Lockheed Martin fighter jets, and partial access to the F-35 program, highlighting Turkey’s growing military-industrial capabilities and ambition to become a top global defense exporter, even as Trump reportedly pressed him to stop purchasing Russian oil, emphasizing Ankara’s delicate geopolitical balancing act between NATO allies and Moscow. Domestically, Erdoğan’s administration intensified crackdowns on opposition-led municipalities, detaining multiple officials linked to the CHP party over alleged corruption in concerts and procurement tenders, a move critics claim is politically motivated to weaken rival local governments ahead of future elections, while simultaneously expanding internal security measures to investigate “foreign influence” and “organized political disruption,” initiatives his supporters frame as protecting national security but which rights groups warn threaten civil liberties. Economically, Erdoğan faces persistent challenges, including high inflation and a weakened lira, prompting him to unveil new infrastructure projects, hint at targeted social spending, and emphasize Turkey’s strategic role as a regional hub for energy pipelines and shipping, while cultivating energy partnerships with Qatar and Saudi Arabia, strengthening military ties with Azerbaijan and Pakistan, and seeking renewed agreements with the European Union, all as part of a multi-vector diplomacy designed to reduce dependence on any single bloc while enhancing Turkey’s leverage globally. Beyond these moves, Erdoğan’s public messaging stressed “sovereign independence,” portraying Turkey as a self-determined power while celebrating high-profile foreign contracts and U.S. meetings, and he has positioned himself as both a statesman addressing humanitarian crises, particularly in Gaza, and a regional strategist shaping defense, trade, and geopolitical alignments, all while consolidating control over domestic political machinery and suppressing opposition. Taken together, these actions over the past week reflect a leader attempting to navigate overlapping domestic pressures, international expectations, and regional rivalries, seeking to reinforce Turkey’s influence on the world stage, secure his political base at home, and craft a legacy as a decisive, globally engaged, and strategically independent leader, all within a single, highly coordinated, and high-risk agenda that intertwines diplomacy, military modernization, economic positioning, and domestic political control.'}

      ]

      

    return(
        <div className="news">
            <h1>Hot News Around The World</h1>
            {/* <p>cheak out amazing Products</p> */}
            {/* <button onClick={toggleTheme}>{changebtn}</button>
            <button onClick={handleClike}>show image</button> */}
            {/* {showImage == 'yes' &&
            <img src="https://png.pngtree.com/png-vector/20241015/ourmid/pngtree-coffee-png-image_14096769.png"></img> 
            } */}
           
           <div className="image">
            <ul>
                {subProducts.map((item)=><li key={item.id}>
                    <div>
                        <h3>
                            {item.name}
                        </h3>
                        <img width={200} src={item.img}></img>
                         {/* go to subProduct path and send the item as props  */}
                        <Link className={"links"} to='/subProduct' state={item}>read more</Link>
                    </div>
                </li>)}
            </ul>
           </div>

           
        </div>
    )
}