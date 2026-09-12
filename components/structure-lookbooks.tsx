import MaterialLookbook from '@/components/material-lookbook';
const supplied='Photo supplied by Sweetfern';
const books={
 'Outdoor shower':[{image:12,caption:'An outdoor shower framed by stone walls and timber screens.'}],
 'Treehouse':[{image:113,caption:'The treehouse beside the pond and woodland.'},{image:107,caption:'A place to sit at the treehouse, looking across the pond.'}],
 'Pergolas':[{image:'/images/structures/pergola-steps.webp',caption:'Timber frames follow the stone garden steps.',credit:supplied},{image:'/images/structures/pergola-view.webp',caption:'A frame for climbing vines and distant views.',credit:supplied},{image:'/images/structures/pergola-planting.webp',caption:'The pergola among seasonal planting.',credit:supplied}],
 'Trellises + screens':[{image:'/images/structures/garden-screen.webp',caption:'Garden screens conceal utilities and support climbing plants.',credit:supplied},{image:'/images/structures/pergola-planting.webp',caption:'Open timberwork supports vines within the garden.',credit:supplied}],
 'Meadow swing':[{image:'/images/structures/meadow-swing.webp',caption:'A timber swing in the meadow with views of the hills.',credit:supplied}]
};
const items=[{name:'Outdoor shower',role:'Water + privacy',note:'Stone and timber create an outdoor room.'},{name:'Treehouse',role:'A woodland destination',note:'A place to pause above the pond.'},{name:'Pergolas',role:'Timber + climbing plants',note:'Frames for shade, garden routes, and views.'},{name:'Trellises + screens',role:'Support + enclosure',note:'Plant supports and screening within the garden.'},{name:'Meadow swing',role:'Play + rest',note:'A simple structure within the wider landscape.'}];
export default function StructureLookbooks(){return <div className="structure-lookbooks"><p className="eyebrow">EXPLORE THE ALBUM</p><MaterialLookbook items={items} customBooks={books} thumbnails/></div>}
