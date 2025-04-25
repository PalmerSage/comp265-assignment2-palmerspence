// Lesson content for the app
// Each lesson includes an ID, title, full story (Cree + English), and related questions

export const lessons = [
  {
    id: 'beaver-dam',
    title: 'The Beavers Build a Dam',

    // Full story broken down into separate parts
    story: [
      {
        cree: 'Nîso amiskwak êsa ê-ocipahcîpicik ê-itêhko-kîwêsîskak, mitikok ê-mah-mîwâcik.',
        english: 'Two beavers were sitting together on the beach, chewing on some wood.',
      },
      {
        cree: 'Kâh-wâpamâcik êsa mistikwak ikota ê-pimâhôcik, nîso aniki amiskwak ocî-pîhtêwak, ê-wîkâpahcîhâtîcik ôta oskâtimikw.',
        english: 'When they saw the logs floating, the two beavers grabbed them to add to their dam.',
      },
      {
        cree: 'Âhâyak mîna miskawêwak mistahi asiniyak, ê-îkôni mîna otinîwak, oskâtimikw ê-wî-ayôtahcik.',
        english: 'They also found big rocks, which they took for their dam as well.',
      },
      {
        cree: 'Ê-kî-aniki amiskwak wî-yâh-pahcîhâtîcik asiniyak ikwa mistikwak, kîta ê-sîhtâhcik oskâtimikw, ikota tê-wî-kîcik.',
        english: 'The beavers used the rocks and the logs to build a cozy dam where they could live.',
      },
    ],

    // Questions tied to each part of the story
    questions: [
      {
        question: 'Two beavers were sitting together on the beach, chewing on some ______.',
        correct: 'wood',
        incorrect: ['rocks'],
      },
      {
        question: 'When they saw the ______ floating, the two beavers grabbed them to add to their dam.',
        correct: 'logs',
        incorrect: ['dam'],
      },
      {
        question: 'They also found big ______, which they took for their dam as well.',
        correct: 'rocks',
        incorrect: ['logs'],
      },
      {
        question: 'The beavers used the rocks and the logs to build a cozy ______ where they could live.',
        correct: 'dam',
        incorrect: ['wood'],
      },
    ],
  },
];
