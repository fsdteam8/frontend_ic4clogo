"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ExternalLink,
  Shield,
  BookOpen,
  Users,
  AlertTriangle,
  Globe,
  Menu,
  Video,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Information() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Petition", href: "/petition" },
    { name: "About", href: "/about" },
    { name: "Information", href: "/information" },
  ];

  const whoUnescoResources = [
    {
      title: "WHO Standards for Sexuality Education in Europe",
      description:
        "These are the main standards that have driven the updated curriculum. These are very often quoted back to parents in response to concerns that are raised on specific content items. See pages 38-39 for the horrifying standards in relation to 0-4 year olds.",
      url: "https://www.bzga-whocc.de/en/publications/standards-for-sexuality-education/",
    },
    {
      title:
        "UNESCO International technical guidance on sexuality education: an evidence-informed approach",
      description:
        "This is the UNESCO 2018 guidance document on sexuality education.",
      url: "https://unesdoc.unesco.org/ark:/48223/pf0000260770",
    },
    {
      title:
        "Comprehensive Sexuality Education: A (Critical) Review of UNESCO and WHO Standards",
      description:
        "A critical review of the WHO and UNESCO Comprehensive Sexuality Education Standards.",
      url: "https://safeschoolsallianceuk.net/wp-content/uploads/2023/04/Comprehensive-Sexuality-Education-A-Review-of-UNESCO-and-WHO-Standards.pdf",
    },
    {
      title:
        "MCC - Sexualising children? - The rise of Comprehensive Sexuality Education",
      description:
        "Today, a new paradigm has emerged, called Comprehensive Sexuality Education (henceforth, CSE). As the name suggests, it is both more thorough than previous ideas (comprehensive) and also wider reaching (it now focuses on the broader concept of 'sexuality' rather than just 'sex'). CSE amounts to a powerful moral intervention into the lives of children around the world that happens as a routine part of the school day. Lessons aim to shape children's attitudes and values in the most intimate sphere of their lives. The goal is to bring about social change.",
      url: "https://brussels.mcc.hu/uploads/default/0001/01/5af421de2164389456d75fa542b8b1baa859bc02.pdf",
    },
    {
      title:
        "MCC - Sexualising Children? The rise of Comprehensive Sexuality Education | Deep Dives",
      description:
        "In this special episode – live from MCC Feszt in Esztergom, Hungary – we talk to Joanna Williams about her new report 'Sexualising Children? The rise of Comprehensive Sexuality Education'.",
      url: "https://www.youtube.com/watch?v=cCEq2xCb274",
    },
    {
      title:
        "The War on Children. The Comprehensive Sexuality Education Agenda",
      description:
        "Video from 2017 that outlines what 'Comprehensive Sexuality Education' actually is and its consequences. An important video for anyone starting out on this topic.",
      url: "https://www.youtube.com/watch?v=Yt0WU3M9ASA",
    },
    {
      title: "Schools & Children: Caught in the Transgender Industry's Web",
      description:
        "A chilling must-watch video talking about the infiltration of Gender Ideology into US schools. Most of this is applicable to what we are seeing in Ireland today with groups like Belong To and what is happening in libraries.",
      url: "https://www.youtube.com/watch?v=PEolq0mJUss",
    },
    {
      title:
        "UN and WHO Global 2030 Sexual Agenda: Children Should Be Prepared for Early Sexual Partnerships",
      description:
        "Swedish website raising concerns over the UN and WHO's 2030 goals with respect to children and sexuality. The embedded video is only available in the online version. This is a deeply disturbing video where teachers engage two young children on the topic of masturbation (the boy looks to be only 4 or 5 years old). It was produced by another organisation pushing children's sexual rights (https://rutgers.international/).",
      url: "https://www.vaken.se/uns-and-whos-global-2030-sexual-agenda-children-should-have-sexual-partners-as-early-as-possible/",
    },
    {
      title: "You're Teaching My Child What? The Truth About Sex Education",
      description:
        "The principles of sexual health education are not based on the hard sciences. Sex education is animated by a specific vision of how society must change, and because of this, sex education curricula omit critical biological truths and endorse high-risk behaviors. The priority for SIECUS, Planned Parenthood, and Advocates for Youth is not the health and well-being of young people. These federally funded organisations are fighting 'repression' and 'intolerance,' not herpes or syphilis. But when sexual freedom reigns, sexual health suffers. Our children are being taught that you can play with fire, and we are obligated to inform them of the risks they face and to teach them biological truths, even when they are politically incorrect.",
      url: "https://www.heritage.org/education/report/youre-teaching-my-child-what-the-truth-about-sex-education",
    },
  ];

  const educationResources = [
    {
      title: "Woke Schools Are Indoctrinating Your Children | Noelle Mering",
      description:
        "Schools are indoctrinating your kids into the woke agenda. How did we get here? Noelle Mering, author of Awake, Not Woke, reviews the history that brought our educational institutions to their current crisis. Why did we go down this road, and can we recover?",
      url: "https://www.youtube.com/watch?v=2h7epYV_Vgg",
    },
    {
      title:
        "Overexposed and Under-Prepared: The Effects of Early Exposure to Sexual Content",
      description:
        "Today, children are being sexualized earlier and earlier, in part because they are exposed to sexual material in movies, television, music and other media earlier than ever. With widespread access to the Internet, curious teens may accidentally or intentionally be exposed to millions of pages of material that is uncensored, sexually explicit, often inaccurate, and potentially harmful.",
      url: "https://www.psychologytoday.com/us/blog/real-healing/201208/overexposed-and-under-prepared-the-effects-early-exposure-sexual-content",
    },
    {
      title: "Awake, Not Woke with Al Kresta, Peter Herbeck, and Noelle Mering",
      description:
        "Renewal Ministries and @AveMariaRadioOnline present a timely discussion on woke ideology between Al Kresta, Peter Herbeck, and Noelle Mering (Author of 'Awake, Not Woke'). This in-depth conversation looks closely at societal trends and the impact on souls, mission, and evangelization. In particular, it focuses on the sexualisation of children as an objective of the woke movement.",
      url: "https://www.youtube.com/watch?v=2JW-7TbmF9k",
    },
    {
      title:
        "Who Is Justine Ang Fonte and Why Are We Letting Her Near Children?",
      description:
        "At the elite Dalton Prep School in Manhattan parents were enraged at a porn literacy workshop given to 6-year-olds. The sex education class showed videos on sex education, gender identity, and consent. The videos instruct children that their parents and grandparents shouldn't touch them without their permission. The parents were not informed and were outraged. The person in charge of this class was Justine Ang Fonte, founder of Amaze.org, which is a collaboration with the Grove Foundation funded 'Advocates for Youth'.",
      url: "https://t2conline.com/who-is-justine-ang-fonte-and-why-are-we-letting-her-near-children/",
    },
    {
      title: "Amaze.org presentation from 2021",
      description: "Amaze.org presentation from 2021",
      url: "https://amaze.org/wp-content/uploads/2021/11/EduConf_Tuesday_20211101.pdf",
    },
    {
      title: "UNESCO Advocates for Youth",
      description:
        "UNESCO web page containing a link to the AMAZE video 'resources'",
      url: "https://healtheducationresources.unesco.org/organizations/advocates-youth",
    },
    {
      title: "Advocates for Youth Amaze Website",
      description:
        "'Amaze takes the awkward out of growing up. Fun, animated videos empowering healthy relationships worldwide, with all the answers you want to know about your body.'",
      url: "https://amaze.org/us/",
    },
    {
      title: "BISH Planet Porn Resource",
      description: "Porn literacy tool.",
      url: "https://bishtraining.com/planet-porn/",
    },
  ];

  const genderIdentityResources = [
    {
      title: "The Cass Review – Final Report",
      description:
        "This is the final version of the 2024 report by Hilary Cass on the Gender Identity Service in the Tavistock Clinic citing the issues found and a set of recommendations going forward.",
      url: "https://cass.independent-review.uk/home/publications/final-report/",
    },
    {
      title:
        "The Cass Report is Out—An Early Analysis of Findings and Recommendations",
      description:
        "Mainstream gender theory is about to have its foundation shattered thanks to a new groundbreaking report. Dr. Hilary Cass recently published a nearly 400-page report on 'gender identity services for children and young people'. The report, which was commissioned by the National Health Service (NHS) England roughly four years ago, found 'remarkably weak evidence' to support the use of puberty blockers and hormone treatments for gender distressed children. The report also includes 32 specific recommendations on how gender services should operate in England.",
      url: "https://donoharmmedicine.org/2024/04/11/cass-report-slams-gender-affirming-care-model",
    },
    {
      title:
        "Treatment for Pediatric Gender Dysphoria - Review of Evidence and Best Practices Department of Health and Human Services May 1, 2025",
      description:
        "The U.S. Department of Health and Human Services, through the Office of the Assistant Secretary for Health and Office of Population Affairs, released a comprehensive review of the evidence and best practices for promoting the health of children and adolescents with gender dysphoria. This review, informed by an evidence-based medicine approach, reveals serious concerns about medical interventions, such as puberty blockers, cross-sex hormones, and surgeries, that attempt to transition children and adolescents away from their sex.",
      url: "https://www.hhs.gov/press-room/gender-dysphoria-report-release.html",
    },
    {
      title:
        "Genspect Canada Supports HHS Report on Paediatric Gender Medicine",
      description:
        "On May 1, 2025, the U.S. Department of Health and Human Services (HHS) released a landmark 409-page report titled Treatment for Pediatric Gender Dysphoria: Review of Evidence and Best Practices. This report represents one of the most comprehensive evaluations to date of the scientific literature and ethical considerations related to paediatric gender medicine.",
      url: "https://genspect.org/genspect-canada-supports-hhs-report-on-paediatric-gender-medicine/",
    },
    {
      title: "The WPATH Files",
      description:
        "These leaked files from the World Professional Association for Transgender Healthcare (WPATH) reveal widespread medical malpractice on children and vulnerable adults.",
      url: "https://environmentalprogress.org/big-news/wpath-files",
    },
    {
      title: "Lobotomies - Past Medical Scandals and The WPATH Files - Part 1",
      description:
        "Continuing our series on the impact of the WPATH Files, join journalist and WPATH Files author Mia Hughes, Genspect's Stella O'Malley, and Carrie Mendoza, MD to explore past medical scandals. What can we learn from the rise and fall of lobotomies as a practice to treat mental illness? How do these lessons help us understand the current medical practice to treat gender dysphoria and how to construct safeguards for children and vulnerable adults? Read the section on lobotomies in the WPATH Files (pp. 53-57).",
      url: "https://youtu.be/9XNHh-NZmlo",
    },
    {
      title: "Why to Reject the WHO Over 'Gender-Affirming Care'",
      description:
        "This text was lightly expanded from a piece of submitted written testimony to the United States Senate for a hearing regarding the World Health Organization and its current impacts on American life. The information provided herein is primarily derived from the book The Queering of the American Child by Logan Lancing and James Lindsay.",
      url: "https://thelancing.substack.com/p/why-to-reject-the-who-over-gender",
    },
    {
      title: "BBC Horizon Docu Drama - Dr Money and the Boy with No Penis",
      description:
        "A disturbing BBC documentary on the story of John Money and the failed experiment of the Reimer twins.",
      url: "https://ok.ru/video/282279676645",
    },
    {
      title:
        "Sophie Ottaway: 'My gender was changed as a baby and kept secret for 22 years'",
      description:
        "Sophie Ottaway joins Mark Dolan to discuss how at the age of 22 she discovered she'd been born a boy, after having her gender changed by doctors as a baby due to medical complications.",
      url: "https://www.youtube.com/watch?v=oiHPQMj4DIE",
    },
    {
      title: "What Is Queer Theory? What You Must Know",
      description:
        "Talk by author of 'The Queering of the American Child', Logan Lancing, that was filmed in New Mexico in September of 2024 as part of the Save Our Children Initiative.",
      url: "https://www.youtube.com/watch?v=kcvGU_gpFg4",
    },
    {
      title: "Introduction to Queer Theory",
      description:
        "Queer Theory is a neo-Marxist and postmodern critical theory of gender, sex, and sexuality. Like all critical theories, Queer Theory uses a neo-Marxist lens to critique society and force it to change through activism. Queer Theorists argue that normalcy - especially as it relates to 'norms' of gender, sex, and sexuality - is the central construct for understanding inequality. That is to say, Queer Theorists believe that dominant groups use power to define what 'normal' means and do so to benefit themselves at the expense of others.",
      url: "https://www.itsnotinschools.com/queer-theory.html",
    },
    {
      title: "Michel Foucault and Queer Theory",
      description:
        "Michel Foucault is the most important public intellectual in recent times. Although he died in 1984 of AIDS, the first public figure in France to do so, and was a highly influential figure in his time, his influence grew almost exponentially thereafter. It is the 'queering' influence of academic discourse by writers such as Foucault and Judith Butler who have also bequeathed to us the previously novel idea of gender identity.",
      url: "https://www.youtube.com/watch?v=ma7JkSr8BXY",
    },
    {
      title:
        "Thinking Sex: Notes for a Radical Theory of the Politics of Sexuality - Gayle S. Rubin",
      description:
        "An online copy of this pivotal essay from Gayle Rubin in the context of Queer Sexuality. Comprehensive sexuality education (CSE), which is called RSE and SPHE in Ireland, seeks to normalise most of what Gayle Rubin identifies as the 'Outer Limits'.",
      url: "https://bpb-us-e2.wpmucdn.com/sites.middlebury.edu/dist/2/3378/files/2015/01/Rubin-Thinking-Sex.pdf",
    },
    {
      title: "Helen Joyce: How gender ideology gripped the West",
      description:
        "Over the past decade, the idea that gender is self-declared and disconnected from biology has reshaped our laws, schools, medical systems, and public discourse. But there's growing pushback: in the United Kingdom, there's been a remarkable reversal against this institutional capture. The shift has come through court challenges, investigative journalism, and public inquiry. To unpack this, Helen Joyce—journalist, editor, and author of Trans: When Ideology Meets Reality—joins this episode of Inside Policy Talks.",
      url: "https://www.youtube.com/watch?v=-mX941cM-FI",
    },
    {
      title:
        "Left vs Left, Derrick Jensen educates Antifa about 'Queer Theory'",
      description:
        "Derrick Jensen is an American ecophilosopher, writer, author, teacher and environmentalist. In this video he argues with a classroom of leftist students over Queer Theory's acceptance of paedophilia and provides supporting quotes from 5 eminent Queer theorists. Listener discretion is advised due to bad language and the subject matter.",
      url: "https://www.youtube.com/watch?v=Uuk9nS_Yu5E",
    },
  ];

  //checked

  const catholicResources = [
    {
      title:
        "'MALE AND FEMALE HE CREATED THEM' TOWARDS A PATH OF DIALOGUE ON THE QUESTION OF GENDER THEORY IN EDUCATION",
      description:
        "Official Vatican teaching on the topic of gender, issued in 2019. Any Catholic uncertain of the church position on this topic needs to read this document.",
      url: "http://www.educatio.va/content/dam/cec/Documenti/19_0997_INGLESE.pdf",
    },
    {
      title: "2024 Vatican Declaration 'Dignitas Infinita' on Human Dignity",
      description:
        "In this 2024 document approved by Pope Francis, the Vatican espouses the infinite dignity of the human person and linked to that it restates the Catholic Teaching on abortion, surrogacy, assisted dying and gender ideology (which it insists must be rejected). This document is a must read for any Catholic as well as any other person whether of faith or not who is interested in understanding the Catholic position on these issues and the rationale behind that position.",
      url: "https://press.vatican.va/content/salastampa/it/bollettino/pubblico/2024/04/08/0284/00588.html#en",
    },
    // {
    //   title:
    //     "Pope Francis on Gender Theory - What the Mainstream Media Didn't Cover",
    //   description:
    //     "This video covers a number of public statements made by Pope Francis in relation to Gender Theory as well as references to applicable sections of the 2019 'Male and Female He Created Them' and 'Dignitas Infinita' from 2024.",
    //   url: "https://youtu.be/UP4gp6A06UQ",
    // },
    {
      title:
        "Vatican calls non-binary gender 'fictitious' in report tackling 'education crisis' over sexuality",
      description:
        "Report from CNN in 2019 in relation to the release of the document 'Male and Female He Created Them' in which they state the Vatican has come under fire from LGBTQ groups after releasing a guide to sexuality for Catholic schools across the world that describes non-binary gender as 'fictitious.'",
      url: "https://edition.cnn.com/2019/06/10/europe/vatican-gender-theory-intl-hnk/index.html",
    },
    {
      title:
        "Pope Francis: Gender ideology is 'one of the most dangerous ideological colonizations' today",
      description:
        "Article from March 2023 where the Holy Father describes Gender Ideology as one of the most dangerous ideological colonisations today.",
      url: "https://www.catholicnewsagency.com/news/253845/pope-francis-gender-ideology-is-one-of-the-most-dangerous-ideological-colonizations-today",
    },
    {
      title:
        "Pope Francis on Gender Theory - What the Mainstream Media Didn't Cover",
      description:
        "In this video, we cover a number of public statements made by the Late Pope Francis on the topic of Gender Ideology. We follow that with references from two important Vatican documents that were released during Pope Francis time in office which many Catholics may not be aware of. These are the 2019 document 'Male and Female he created them' and the second is the 2024 document 'Dignitas Infinita'. At the end we will consider the articles of Cannon Law related to Catholics childhood education.",
      url: "https://www.youtube.com/watch?v=UP4p96A06UQ",
    },
    {
      title:
        "A CATHOLIC RESPONSE TO GENDER IDENTIT Y THEORY: Catechesis and Pastoral Guidelines",
      description:
        "A sample document for the Diocese of Portland, Oregon to provide clarity on the Catholic Church’s teaching on gender identity theory. These guidelines are offered as a teaching and formation resource and also as encouragement and hope for everyone working with those dealing with gender issues.",
      url: "https://files.ecatholic.com/12494/documents/2023/1/EN_A%20Catholic%20Response%20to%20Gender%20Identity%20Theory_FINAL2023.pdf?t=1674605305000",
    },
    {
      title: "Bishop Barron Shares Gender Ideology Concerns with Lawmakers",
      description:
        "Bishop Barron expresses his concerns over Gender Ideology and related legislation that is being introduced. He encourages viewers to speak up on this issue and lobby lawmakers.",
      url: "https://www.youtube.com/watch?v=FueD8uzIoy0",
    },
    {
      title:
        "Transgenderism: An Easy to Understand Summary - Explaining the Faith",
      description:
        "90 minute video from 2023 in which a US catholic priest, Fr. Chris Alar, gives an A-Z factual run down on the issue of Transgenderism as well as covering the Catholic perspective on it.",
      url: "https://www.youtube.com/watch?v=-b06sUHqW5E",
    },
  ];

  const criticalTheoryResources = [
    {
      title:
        "The Rise of “Woke”: From Postmodernism and Critical Theory To Identity Politics - Stephen Hicks",
      description:
        "Identity politics dominates our public discussion: Critical Race Theory, the 1619 Project, Black Lives Matter, Privilege, victim versions of Feminism, Non-binary, Trans, etc. Learn how postmodernism and critical theory are being mobilized (and weaponized) today.",
      url: "https://www.youtube.com/watch?v=6TTZswYxGKM",
    },
    {
      title:
        "A Christian Response to Wokeness (FULL VIDEO) | Noelle Mering | Leadership Institute",
      description:
        "Noelle Mering, author of 'Awake, Not Woke: A Christian Response to the Cult of Progressive Ideology,' shares with the Leadership Institute at Franciscan University of Steubenville how Christians should respond to woke ideology in today's culture.",
      url: "https://www.youtube.com/watch?v=3wy0MY_EmDE",
    },
    {
      title:
        "Noelle Mering | Staying Awake in an Age of Ideology | 2023 Defending the Faith Conference",
      description:
        "Noelle Mering gave this thought-provoking talk, 'Staying Awake in an Age of Ideology' at the 2023 Defending the Faith Conference at Franciscan University.",
      url: "https://www.youtube.com/watch?v=DA1ucK4GMgs",
    },
    {
      title: "How French Intellectuals Ruined the West",
      description:
        "Postmodernism and its Impact, Explained. In this piece, Helen Pluckrose outlines some of the arguments later explored in depth in her bestselling 2020 book, Cynical Theories (co-authored with James Lindsay). The essay charts the pernicious influence of postmodernist thinking on two generations of academics and activists. If you want to understand how we got to a place where microaggressions are denounced as violence but the brutal terrorism of an intifada is considered righteous, this is an important primer.",
      url: "https://quillette.com/2024/05/07/how-french-intellectuals-ruined-the-west-foucault-lyotard-derrida/",
    },
    {
      title: "Wolf in sheep's clothing",
      description:
        "The story of Saul Alinsky, the father of community organizing, and the rise of his Cultural Marxism in the Catholic Church and America. This is a must watch to understand why his toxic influence is felt all across the world in the year 2020.",
      url: "https://www.youtube.com/watch?v=ZnKB9NzgD4k",
    },
    {
      title: "A Wolf In Sheep's Clothing II: The Gender Agenda (Part 1)",
      description:
        "This is the second installment of EWTN's documentary: A Wolf In Sheep's Clothing. This time, it narrates the life and works of Simone de Beauvoir and Alfred Charles Kinsey. 'By the fruits you will know them'—you will see how rotten and evil the foundations of the sexual revolution (culminating with the gender ideology) are. Part 1 of 3.",
      url: "https://www.youtube.com/watch?v=JPDafw3Q7u0",
    },
    {
      title: "A Wolf In Sheep's Clothing II: The Gender Agenda (Part 2)",
      description:
        "This is the second installment of EWTN's documentary: A Wolf In Sheep's Clothing. This time, it narrates the life and works of Simone de Beauvoir and Alfred Charles Kinsey. 'By the fruits you will know them'—you will see how rotten and evil the foundations of the sexual revolution (culminating with the gender ideology) are. Part 2 of 3.",
      url: "https://www.youtube.com/watch?v=GqRK2wsUYN0",
    },
    {
      title: "A Wolf In Sheep's Clothing II: The Gender Agenda (Part 3)",
      description:
        "This is the second installment of EWTN's documentary: A Wolf In Sheep's Clothing. This time, it narrates the life and works of Simone de Beauvoir and Alfred Charles Kinsey. 'By the fruits you will know them'—you will see how rotten and evil the foundations of the sexual revolution (culminating with the gender ideology) are. Part 3 of 3.",
      url: "https://www.youtube.com/watch?v=Jzws3vUdD-0",
    },
    {
      title:
        "Postmodern Religion and the Faith of Social Justice - James A. Lindsay and Mike Nayna",
      description:
        "Increasingly, we are seeing insistences that Social Justice has become a new religion. The purpose of this essay is to explore this topic in some depth. Because this essay is inordinately long—because the topic is inordinately complicated—it is broken into sections, as listed below. The reader is encouraged to engage with it in pieces and to treat it as he or she would a short book on this topic.",
      url: "https://newdiscourses.com/2020/06/postmodern-religion-faith-social-justice/",
    },
    {
      title:
        "Critical Theory (Frankfurt School) - Stanford Encyclopedia of Philosophy",
      description:
        "'Critical theory' refers to a family of theories that aim at a critique and transformation of society by integrating normative perspectives with empirically informed analysis of society's conflicts, contradictions, and tendencies. In a narrow sense, 'Critical Theory' (often denoted with capital letters) refers to the work of several generations of philosophers and social theorists in the Western European Marxist tradition known as the Frankfurt School.",
      url: "https://plato.stanford.edu/entries/critical-theory/",
    },
    {
      title:
        "Helen Pluckrose on confronting Critical Theory | Solutions With David Ansara Podcast #32",
      description:
        "I speak with British writer Helen Pluckrose about the pernicious influence of Critical Theory, and how to push back against these dangerous ideas. Helen and I discuss the postmodern origins of Critical Theory, and how it escaped academia to become mainstream. This has dramatically altered the way we talk about race, gender and sexuality, she says. Helen argues that what passes for 'Social Justice' is in fact a fundamentally illiberal and intolerant ideology. Its adherents suppress free speech, foster a culture of victimhood and essentialise people's experience based on their identity and 'positionality'. We explore alternative (liberal) approaches to social justice, and also discuss the practical steps that ordinary people can take to counteract 'wokeness' in the workplace or other institutions.",
      url: "https://www.youtube.com/watch?v=xCMUAz7pMA8",
    },
    {
      title: "DEI Explained - New Discourses",
      description:
        "The Diversity, Equity, and Inclusion industry under Woke Marxism is easy to understand. Equity is a rebranding of Socialism: an administered economy that makes outcomes equal. Diversity and Inclusion are tools used to install political officers and to censor and remove dissidents, respectively. In other words, the Woke Marxist DEI industry is a racket designed to install commissars for its ideology. In this episode of New Discourses Bullets, James Lindsay breaks this vital concept down in quick, digestible terms.",
      url: "https://www.youtube.com/watch?v=IKLuhY2Q7Rw",
    },
    {
      title: "A Guide to Critical Race Theory by Ryan Chapman",
      description:
        "A guide to critical race theory based on five of the most influential books related to critical race theory.",
      url: "https://www.youtube.com/watch?v=2rDu_VUpoJ8",
    },
    {
      title:
        "Critical Race Theory: The Fault Lines of Social Justice | Feat. Dr. Voddie Baucham",
      description:
        "Dr. Voddie Baucham, preacher, professor, and cultural apologist, says, 'Antiracism offers no salvation—only perpetual penance to battle an incurable disease.' Join us and discover the disturbing worldview that underlines the philosophy of social justice and critical race theory.",
      url: "https://www.youtube.com/watch?v=yEL7KtQ673w",
    },
    {
      title: "Cultural Marxism Explained",
      description:
        "This video is an explanation of cultural Marxism, which is a term often thrown around in contemporary political and social debates. Here, those ideas are explored in a brief format.",
      url: "https://www.youtube.com/watch?v=rj1fjy0iM6U",
    },
  ];

  // Add new section for Woke Education/Pedagogy
  const wokeEducationResources = [
    {
      title: "The War on Children - Documentary (2024)",
      description:
        "'The War On Children' exposes the ongoing battle for control of the next generation and their minds. This film reveals the battle plan being used to control the future. To win this war you have to understand the tactics of your enemy.",
      url: "https://twitter.com/elonmusk/status/1759049663917838659?s=12",
    },
    {
      title: "The Critical Turn in Education",
      description:
        "Education has been stolen from us and from our children. Yes, stolen. It was deliberately transformed from within into something that is barely education at all anymore. Instead, it's a systematic program of thought reform (brainwashing) into neo-Marxist belief and activism. How has this been accomplished? The formal name for the transformation is 'the critical turn in education,' which 'turned' education from traditional models of pedagogy to 'Critical Pedagogy,' the application and teaching of Critical Theory to and through the education system. Its purpose: to overcome what Marxists refer to as 'the problem of reproduction,' by which stable societies reproduce themselves from one generation to the next, especially through institutions involving children like religion, family, media, and especially education",
      url: "https://www.youtube.com/watch?v=HAQdYE8rQPI",
    },
    {
      title: "Paulo Freire's 'Critical' Method of Education",
      description:
        "How on Earth did education get so messed up and stolen from our society and our kids? While the critical turn in education enabled this 'transformation' of our education system, the crucial piece that allowed it to happen is the work of a Brazilian Marxist by the name of Paulo Freire. Paulo Freire completely transformed education, not least by Marxifying it.",
      url: "https://www.youtube.com/watch?v=SukzKzs_OSQ",
    },
    {
      title: "10 Concepts About PAULO FREIRE's Pedagogy",
      description:
        "In this video I will explain 10 concepts that will help you become a better teacher by using Paulo Freire's pedagogy.",
      url: "https://www.youtube.com/watch?v=dE0iRMHzQC8",
    },
    {
      title: "Paulo Freire - Pedagogy of the Oppressed (Free Audiobook)",
      description:
        "Paulo Freire's work has helped to empower countless people throughout the world and has taken on special urgency in the United States and Western Europe, where the creation of a permanent underclass among the underprivileged and minorities in cities and urban centers is ongoing.",
      url: "https://www.youtube.com/watch?v=9NzKrFAaCsA",
    },
    {
      title: "The Lancing Ep. 001 - Critical Constructivism i.e. WOKE",
      description:
        "In this episode of The Lancing, Logan explores Chapter 1 of Joe Kincheloe's 2005 book, Critical Constructivism. (Kincheloe, J. L. (2005). Critical constructivism primer. Peter Lang.)",
      url: "https://www.youtube.com/watch?v=cm6W2sn2WHA",
    },
    {
      title: "The Lancing Ep. 003 - Critical Constructivism (WOKE) Part 2",
      description:
        "In this episode of The Lancing, Logan explores Chapter 2 of Joe Kincheloe's 2005 book, Critical Constructivism. (Kincheloe, J. L. (2005). Critical constructivism primer. Peter Lang.)",
      url: "https://www.youtube.com/watch?v=KnVjliP-JBE",
    },
    {
      title: "The Lancing Ep. 5 - Navigating Parental Resistance",
      description:
        "In this episode of The Lancing, Logan explores Navigating Parental Resistance: Learning from Responses of LGBTQ-Inclusive Elementary School Teachers",
      url: "https://www.youtube.com/watch?v=MsIAmBpEYG0",
    },
    {
      title: "Kevin Kumashiro – Four approaches to Social Justice education",
      description:
        "Celebrated Queer educator, Kevin Kumashiro gives his perspective on Social Justice Education. As part of his 2009 book, Against Common Sense: Teaching and Learning Toward Social Justice he states: 'Our children are experiencing the queer,' Specifically, our children are experiencing the 'queer' because they have been purposefully placed in a state of psychological crisis. 'Crisis,' Kumashiro says, 'should be expected in the process of learning, by both the student and the teacher. Like queer activism, queer teaching always works through crisis...the goal is to continue teaching and learning through crisis—to continue experiencing the queer.' (p. 55)",
      url: "https://www.youtube.com/watch?v=GN-yhlSqfz0",
    },
    {
      title:
        "Drag pedagogy: The playful practice of queer imagination in early childhood Harper Keenan & Lil Miss Hot Mess",
      description:
        "In recent years, a programme for young children called Drag Queen Story Hour (DQSH) has risen to simultaneous popularity and controversy. This article, written collaboratively by an education scholar and a drag queen involved in organizing DQSH, contextualizes the programme within the landscape of gender in education as well as within the world of drag, and argues that Drag Queen Story Hour provides a generative extension of queer pedagogy into the world of early childhood education.",
      url: "https://www.tandfonline.com/doi/full/10.1080/03626784.2020.1864621",
    },
    {
      title: "Charlotte Thomson Iserbyt - Deliberate Dumbing Down of the World",
      description:
        "A chilling 10 minute edit of a much larger series of videos on the same topic. 'The Purpose of Education is to change the thoughts, actions and feelings of students - through challenging the students fixed beliefs' - removing their belief in God and their country. ",
      url: "https://www.youtube.com/watch?v=laS4V8FZgQo",
    },
    {
      title:
        "The Fight for New College - A short documentary on the counterrevolution in higher education",
      description:
        "The hard Left has dominated the universities for generations. It has captured the academic disciplines, established ideologically driven bureaucracies, and put activism, rather than scholarship, at the center of academic life. The Left has long considered the university campus its own private domain, untouchable by political leaders—until now.",
      url: "https://christopherrufo.com/p/the-fight-for-new-college",
    },
  ];

  const globalismResources = [
    {
      title:
        "The Agenda: Their Vision - Your Future (2025) | Full Documentary (4K)",
      description:
        "In fiction and fact, there have always been people and organisations with ambitions to control the world. And now the oligarchs who pull the strings of finance and power finally have the tools to achieve their global objectives; omnipresent surveillance, artificial intelligence, digital currency and ultimately digital identities. The potential for social control of our lives and minds is alarmingly real. The plan has been decades in the making and has seen infiltration of Governments, local councils, big business, civil society, the media and, crucially, education. A ceaseless push for a new reality, echoing Aldous Huxley's Brave New World, or George Orwell's 1984.",
      url: "https://www.youtube.com/watch?v=ZFHHOBiUrkg",
    },
    {
      title:
        "TRANSFORMING OUR WORLD: THE 2030 AGENDA FOR SUSTAINABLE DEVELOPMENT",
      description: "Link to the official UN document outlining Agenda 2030",
      url: "https://sdgs.un.org/sites/default/files/publications/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
    },
    {
      title: "Yellow Forum",
      description:
        "News, debates and initiatives to stop our transition to Stakeholder Capitalism",
      url: "https://yellow.forum/",
    },
    {
      title:
        "Stakeholder Capitalism – Ep 1: Our New Political System (40 min Documentary)",
      description:
        "Discover how the heads of all G20 governments, from the UK and US to Russia and China, are undemocratically transitioning us away from Free-Market Capitalism to a global, authoritarian political system called Stakeholder Capitalism. To make this available for free, we need help paying the production costs.",
      url: "https://www.youtube.com/watch?v=cVupsbYhw_c",
    },
    {
      title: "1984 vs Brave New World - How Freedom Dies",
      description:
        "George Orwell’s writings have experienced a spike in popularity over the past several decades and for a good reason – modern societies are becoming ever more like the dystopia Orwell depicted in his novel 1984. Whether it be mass surveillance, the incessant use of propaganda, perpetual war, the manipulation of language, or the cult of personality surrounding political leaders, many consider Orwell’s novel to be prescient.While the West remains freer than the dystopian society of 1984, the trend of more and more power being concentrated in the hands of politicians and bureaucrats does not bode well for those who favour a free society.",
      url: "https://www.youtube.com/watch?v=m9C3vcRlBOY",
    },
  ];
  const organizationsResources = [
    {
      title: "International Coalition for Children (IC4C)",
      description:
        "Protecting Our Children’s Future - safeguarding parental rights and children’s innocence.",
      url: "https://internationalcoalition4children.org/",
    },
    {
      title: "Genspect",
      description:
        "A healthy approach to sex and gender - An excellent reference site on the topic.",
      url: "https://genspect.org/",
    },
    {
      title: "SEGM - Society for Evidence Based Gender Medicine",
      description:
        "Aim to promote safe, compassionate, ethical and evidence-informed healthcare for children, adolescents, and young adults with gender dysphoria",
      url: "https://segm.org/", // Note: Original PDF had YouTube link here which seemed incorrect
    },
    {
      title: "Sex Matters",
      description:
        "Mission: to promote clarity about sex in law, policy and language in order to protect everybody’s rights. Sex Matters is a human-rights organisation.",
      url: "https://sex-matters.org/",
    },
    {
      title: "Transgender Trend",
      description:
        "We are an organisation of parents, professionals and academics based in the UK who are concerned about the current trend to diagnose children as transgender, including the unprecedented number of teenage girls suddenly self-identifying as ‘trans’ (Rapid Onset Gender Dysphoria or ROGD). We are also concerned about legislation which places transgender rights above the right to safety for girls and young women in public toilets and changing rooms along with fairness for girls in sport.",
      url: "https://www.transgendertrend.com/",
    },
    {
      title: "The Deliberate Dumbing Down of America",
      description:
        "A website dedicated to the work of Charlotte Thomson Iserbyt which chronicals the history of US education and it's dumbing down and collectivisation at the hands of Humanists, Marxists and the Billionaires and their Foundations who supported them. Given the globalist nature of the later's agenda, the material is also applicable at a global level. ",
      url: "https://deliberatedumbingdown.com/ddd/",
    },
    {
      title: "New Culture Forum",
      description:
        "Analyzes socio-political structures and their impact on society.",
      url: "https://www.newcultureforum.org.uk/",
    },
    {
      title: "New Discourses",
      description:
        "James Lindsay's website focused on pursuing the light of objective truth in subjective darkness. ",
      url: "https://newdiscourses.com/",
    },
    {
      title: "Family Watch International",
      description:
        "Focused on countering the Sexuality Education agenda and promoting the family. Contains a lot of very good documentaries on this and related topics.",
      url: "https://familywatch.org/",
    },
    {
      title: "Family Watch International Documentaries",
      description:
        "Link to a series of documentaries focused on child protection and family values.",
      url: "https://familywatch.org/resources/documentaries/#.XhD9MhdKhQI",
    },
    {
      title: "LGB Alliance – Defending the rights of lesbians and children",
      description:
        "A UK organisation for gay, lesbian and bisexual people set up to defend the rights of lesbians and oppose the teaching of gender ideology in schools.",
      url: "https://lgballiance.org.uk/facts/",
    },
    {
      title: "Influence Watch",
      description:
        "Use this site to check out the linkages between a person or organisation and other people and organisations. A quick check can tell you a lot.",
      url: "https://www.influencewatch.org/",
    },
  ];

  const youtubeResources = [
    {
      title: "International Coalition 4 Children (IC4C)",
      description:
        "Protecting Our Children's Future - safeguarding parental rights and children's innocence.",
      url: "https://www.youtube.com/channel/UCvlzrHFl4kdijP9TEO6wEpg",
    },
    {
      title: "Genspect",
      description: "An excellent resource in the area of sex and gender.",
      url: "https://www.youtube.com/@genspect",
    },
    {
      title: "SEGM – Society for Evidence Based Gender Medicine",
      description:
        "Aim to promote safe, compassionate, ethical and evidence-informed healthcare for children, adolescents, and young adults with gender dysphoria",
      url: "https://www.youtube.com/@segm_ebm", // Placeholder - original link was invalid
    },
    {
      title: "New Discourses ",
      description:
        "James Lindsay's channel focused on pursuing the light of objective truth in subjective darkness. ",
      url: "https://www.youtube.com/@newdiscourses", // Placeholder
    },
    {
      title: "Carlos Ruffo",
      description:
        "Chris Ruffo is a conservative author/activist fighting woke ideology.",
      url: "https://www.youtube.com/@christopherrufo", // Placeholder
    },
    {
      title: "Forbes Breaking News",
      description:
        "US News Agency that covers controversial issues not covered elsewhere.",
      url: "https://www.youtube.com/@ForbesBreakingNews",
    },
    {
      title: "American College of Pediatricians",
      description:
        " Promoting the Non-Medicalisation of Youth wrt gender issues.",
      url: "https://www.youtube.com/@AmericanCollegeofPediatricians",
    },
    {
      title: "Logan Lancing",
      description:
        "Developed as a tool to help you understand what the ideologies, politics and theories are, where they come from, and how they show up in your child's classroom.",
      url: "https://www.youtube.com/@loganlancing",
    },
    {
      title: "Academy of Ideas",
      description:
        "A channel that looks at socio-political structures and ideologies, and their impact on society and the human person.",
      url: "https://www.youtube.com/@academyofideas",
    },
  ];

  const ResourceTable = ({
    resources,
    title,
    icon: Icon,
    description,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resources: any[];
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    description: string;
  }) => (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <Icon className="h-6 w-6 text-[#2D5E69]" />
          {title}
        </CardTitle>
        <CardDescription className="text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Title</TableHead>
              <TableHead className="w-2/3">Description</TableHead>
              <TableHead className="w-16">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-slate-800">
                  {resource.title}
                </TableCell>
                <TableCell className="text-slate-600 text-sm">
                  {resource.description}
                </TableCell>
                <TableCell>
                  <Link
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100">
      {/* Header */}
      <section className="relative w-full bg-gradient-to-b from-[#D7F8FF] to-[#2D5E69] overflow-visible rounded-b-[15px] md:rounded-b-[40px] h-[600px] md:h-[600px] z-0">
        <div className="container mx-auto relative z-10">
          <nav className="py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    src="/coa-logo.png"
                    alt="International Coalition4Children Logo"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px]"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#25525D] hover:text-[#25525D]/80 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex">
                <Button
                  asChild
                  className="bg-[#25525D] hover:bg-[#25525D]/95 text-white rounded-md"
                >
                  <Link href="https://www.givesendgo.com/GFJPJ" target="_blank">
                    Donate
                  </Link>
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#25525D]"
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle className="text-[#25525D]">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="text-[#25525D] hover:text-[#25525D]/80 transition-colors text-lg"
                          onClick={() => setOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                      {/* Donate Button (Mobile) */}
                      <Button
                        asChild
                        className="bg-[#25525D] hover:bg-[#25525D]/95 text-white rounded-md mt-4"
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          href="https://www.givesendgo.com/GFJPJ"
                          target="_blank"
                        >
                          Donate
                        </Link>
                      </Button>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>

          {/* Text Content */}
          <div className="md:pt-8 pb-8 text-center">
            <h1 className="text-[38px] md:text-[56px] font-[700] text-[#265661] mb-4">
              Information Resources
            </h1>
            <p className="text-[26px] md:text-[32px] font-[400] text-[#D3DDDF]">
              Comprehensive collection of research, reports, and documentation
              on education curriculum concerns, gender ideology, and parental
              rights in children&apos;s education.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Declaration Section */}
        {/* <Card className="mb-12 border-[#2D5E69]">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100">
            <CardTitle className="text-2xl text-slate-800">
              The International Coalition4Children Inc. Declaration
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-slate-700 leading-relaxed mb-4">
              As parents, caregivers, educators, and concerned citizens, we have
              grave concerns about the damaging impact that the United Nations
              (UN) and World Health Organisation's (WHO) Comprehensive Sexuality
              Education (CSE) guidance "International Technical Guidance on
              Sexuality Education" has on children's physical, mental, emotional
              and social health.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We declare that - parents and caregivers are the indisputable
              primary and most influential educators in their children's lives,
              entrusted with the responsibility of protecting their inalienable
              birthright, including innocence and dignity. Parents and
              caregivers are the first and foremost authority in a child's life,
              until the child is the legal age of majority at 18 years old. This
              prerogative includes ensuring that our children's education aligns
              with our instilled values and cultural traditions, and with our
              children's understanding of age-appropriate content.
            </p>
          </CardContent>
        </Card> */}

        {/* Resource Tables */}
        <ResourceTable
          resources={whoUnescoResources}
          title="WHO and UNESCO Comprehensive Sexuality Education Standards"
          icon={Globe}
          description="Official documents and critical reviews of international sexuality education standards"
        />

        <ResourceTable
          resources={educationResources}
          title="Education Curriculum and Related Concerns"
          icon={BookOpen}
          description="Research and documentation on comprehensive sexuality education implementation and concerns"
        />

        <ResourceTable
          resources={genderIdentityResources}
          title="Gender Identity and Queer Theory"
          icon={Users}
          description="Medical reports, theoretical frameworks, and critical analysis of gender ideology"
        />

        <ResourceTable
          resources={catholicResources}
          title="The Catholic Position on Gender Ideology"
          icon={Shield}
          description="Official Vatican teachings and Catholic perspectives on gender theory and education"
        />

        <ResourceTable
          resources={criticalTheoryResources}
          title="Critical Social Justice / Postmodernism"
          icon={AlertTriangle}
          description="Analysis of critical theory, postmodernism, and their influence on education and society"
        />

        <ResourceTable
          resources={globalismResources}
          title="United Nations / WEF / Globalism / Stakeholder Capitalism"
          icon={Globe}
          description="Documentation of global governance initiatives and their impact on education and society"
        />

        <ResourceTable
          resources={wokeEducationResources}
          title="Woke Education/Pedagogy"
          icon={BookOpen}
          description="Critical pedagogy, Paulo Freire's methods, and the transformation of education through critical theory"
        />

        <ResourceTable
          resources={globalismResources}
          title="United Nations / WEF / Globalism / Technocracy / Stakeholder Capitalism"
          icon={Globe}
          description="Documentation of global governance initiatives and their impact on education and society"
        />

        <ResourceTable
          resources={organizationsResources}
          title="Organisations and Websites of Interest"
          icon={Globe}
          description="Key organizations addressing gender ideology and child protection"
        />

        <ResourceTable
          resources={youtubeResources}
          title="YouTube Channels of Interest"
          icon={Video}
          description="Video resources on gender ideology and related topics"
        />

        {/* Call to Action */}
        <Card className="mt-12 bg-[#2D5E69] text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Take Action</h3>
            <p className="text-[#bed2d6] mb-6 max-w-2xl mx-auto">
              Join thousands of parents and concerned citizens in supporting the
              right of parents to guide their children&apos;s education. Sign
              our petition and help protect children&apos;s innocence and
              parental rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/petition" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-[#2D5E69] hover:bg-teal-50"
                >
                  Sign the Petition
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#2D5E69] bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
    </div>
  );
}
