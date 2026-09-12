import MaterialLookbook from '@/components/material-lookbook';
const credit='Photo supplied by Sweetfern';
const books={
 'Pond edges':[{image:'/images/pond-bank-terracing.webp',caption:'Terraced planting areas along the pond bank.',credit},{image:'/images/pond-boulder-edge-no-flare.webp',caption:'Boulders and planting at the water’s edge.',credit},{image:105,caption:'The pond within the summer landscape.'}],
 'Woodland edges + paths':[{image:113,caption:'The planted pond edge meets the surrounding woodland.'},{image:100,caption:'Stone steppers provide access through pond-side planting.'},{image:'/images/pond-stone-paths.webp',caption:'Stone paths among established vegetation.',credit}],
 'Meadows + habitat':[{image:'/images/meadow-reclamation/meadow-mosaic.webp',caption:'A mosaic of flowering meadow and connected paths.',credit},{image:'/images/meadow-reclamation/wildflowers.webp',caption:'White and yellow flowers among meadow grasses.',credit},{image:'/images/meadow-reclamation/path-to-swing.webp',caption:'A path creates access through the meadow.',credit}]
};
const items=[{name:'Pond edges',role:'Water + planting',note:'Boulders, planting terraces, and the restored pond edge.'},{name:'Woodland edges + paths',role:'Vegetation + access',note:'Planted edges and routes where the garden meets woodland.'},{name:'Meadows + habitat',role:'Seasonal diversity',note:'Flowering meadows with paths through the planting.'}];
export default function RestorationLookbooks(){return <div className="structure-lookbooks"><p className="eyebrow">EXPLORE THE ALBUM</p><MaterialLookbook items={items} customBooks={books} thumbnails/></div>}
