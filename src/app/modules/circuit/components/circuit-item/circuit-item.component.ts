import { Component, OnInit } from '@angular/core';
import { Circuit } from '../../models/circuit';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-circuit-item',
  templateUrl: './circuit-item.component.html',
  styleUrls: ['./circuit-item.component.scss']
})
export class CircuitItemComponent implements OnInit {

  circuit: Circuit = {...Circuit.EMPTY_MODEL};
  fallback =
  'data:image/png;base64,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';

  circuitList: Circuit[] | any = [
    {
      id: 1,
      nom: 'Sainte Marie',
      description: '',
      img: 'sainte-marie-1.jpg',
      etapeList: [
        {
          id: 1,
          nom: 'Princesse Boro Lodge',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p>`,
          img: 'sainte-marie-1.jpg'
        },
        {
          id: 2,
          nom: 'Soanambo Lodge',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'sainte-marie-2.jpg'
        },
        {
          id: 3,
          nom: 'Masoandro Lodge',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'sainte-marie-3.jpg'
        }
      ]
    },
    {
      id: 2,
      nom: 'Nosy Be',
      description: '',
      img: 'nosy-be-1.jpg',
      etapeList: [
        {
          id: 1,
          nom: 'Sakatia Lodge',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'nosy-be-1.jpg'
        },
        {
          id: 2,
          nom: 'Komba Tsara',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'nosy-be-2.jpg'
        },
        {
          id: 3,
          nom: 'Magasoa Lodge',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'nosy-be-3.jpg'
        },
        {
          id: 4,
          nom: 'Vanilla HTL / Exoro Beach',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'nosy-be-4.jpg'
        }
      ]
    },
    {
      id: 3,
      nom: 'Anakao',
      description: '',
      img: 'anakao-1.jpg',
      etapeList: [
        {
          id: 1,
          nom: 'Anakao Ocean Lodge',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'anakao-1.jpg'
        },
        {
          id: 2,
          nom: 'Salary Vezo',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'anakao-2.jpg'
        }
      ]
    },
    {
      id: 4,
      nom: 'Andavadoaka',
      description: '',
      img: 'andavadoaka-1.jpg',
      etapeList: [
        {
          id: 1,
          nom: 'Laguma Beach',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'andavadoaka-1.jpg'
        },
        {
          id: 2,
          nom: 'Olobe Lodge',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'andavadoaka-2.jpg'
        },
        {
          id: 3,
          nom: 'Coco Beach',
          description:  `<p><span class="ql-size-huge" style="color: rgb(230, 0, 0);">Objectif</span></p><p>	Décrocher le boulot idéal est parfois un véritable défi, mais créer un superbe C.V. ne devrait pas en être un&nbsp;! Voici quelques conseils pour vous aider à vous lancer. Pour remplacer le texte d’un conseil par votre propre texte, cliquez simplement dessus et commencez à taper.</p><p>	Vous souhaitez ajouter une nouvelle expérience ou formation&nbsp;? Pas de problème. Cliquez simplement sur les exemples d’entrées ci-dessous, puis cliquez sur le signe plus qui s’affiche. Vous recherchez une lettre de motivation correspondante&nbsp;? Il suffisait de le demander&nbsp;!</p><p>	Dans l’onglet Insertion, cliquez sur Page de garde.</p><p><span class="ql-size-huge" style="color: rgb(0, 97, 0);">ExpÉrience</span></p><p>		[Dates De - À]</p><p>		[Entreprise]</p><p>		[Poste]</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p>				<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span class="ql-size-huge" style="color: rgb(0, 71, 178);">Formation</span></p><p>	[Dates De - À]</p><p>	[Nom école, Lieu]</p><p>	[Diplôme]</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte.</p><p>			<span style="color: rgb(127, 127, 127);">&gt;&nbsp;&nbsp;&nbsp;</span>Cliquez ici pour entrer le texte</p><p><span style="color: rgb(107, 36, 178);" class="ql-size-huge">RÉfÉrences</span></p><p><span class="ql-size-large">	Références disponibles sur demande.</span></p>`,
          img: 'andavadoaka-3.jpg'
        }
      ]
    },

  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routerParams => {
      console.log('PARAMS: ', routerParams)
      if (routerParams.circuitId && +routerParams.circuitId > 0) {
        this.circuit = {...this.circuitList[+routerParams.circuitId - 1]}
      }
    })
    console.log(this.circuit)
  }

}
