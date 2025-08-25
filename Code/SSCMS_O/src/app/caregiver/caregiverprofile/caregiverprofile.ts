import { ChangeDetectorRef, Component } from '@angular/core';
import { Education } from '../../model/education';
import { Experience } from '../../model/experience';
import { Skill } from '../../model/skill';
import { Reference } from '../../model/reference';
import { Language } from '../../model/language';
import { Hobby } from '../../model/hobby';
import { CaregiverService } from '../../service/caregiver.service';
import { EducationService } from '../../service/education.service';
import { ExperienceService } from '../../service/experience.service';
import { SkillService } from '../../service/skill.service';
import { ReferenceService } from '../../service/reference.service';
import { LanguageService } from '../../service/language.service';
import { HobbyService } from '../../service/hobby.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-caregiverprofile',
  standalone: false,
  templateUrl: './caregiverprofile.html',
  styleUrl: './caregiverprofile.css'
})
export class Caregiverprofile {

  caregiver: any;

  educations: Education[] = [];

  experiences: Experience[] = [];

  newExperience: Experience = { company: '', position: '', fromDate: '' };

  // extracurriculars: Extracurricular[] = [];
  // newExtracurricular: Extracurricular = { title: '', role: '', description: '' };

  skills: Skill[] = [];

  newSkill: Skill = {
    name: '',
    level: ''
  };

  newEducation = {
    level: '',
    institute: '',
    result: '',
    year: ''
  };


  // trainings: Training[] = [];

  // newTraining: Training = {
  //   title: '',
  //   institute: '',
  //   duration: '',
  //   description: ''
  // };


  references: Reference[] = [];

  newReference: Reference = {
    name: '',
    contact: '',
    relation: ''
  };

  languages: Language[] = [];

  newLanguage: Language = {
    name: '',
    proficiency: ''
  };

  hobbies: Hobby[] = [];

  newHobby: Hobby = {
    name: ''
  };

  constructor(
    private caregiverService: CaregiverService,
    private cdr: ChangeDetectorRef,
    private educationService: EducationService,
    private expService: ExperienceService,
    // private extracurricularService: ExtracurricularService,
    private skillService: SkillService,
    // private trainingService: TrainingService,
    private referenceService: ReferenceService,
    private languageService: LanguageService,
    private hobbyService: HobbyService,
  ) { }


  ngOnInit(): void {
    this.getProfile();
    this.loadEducations();
    this.loadExperiences();
    // this.loadExtracurriculars();
    this.loadSkills();
    // this.loadTrainings();
    this.loadReferences();
    this.loadLanguages();
    this.loadHobbies();

  }


  loadHobbies(): void {
    this.hobbyService.getAllHobbies().subscribe({
      next: (data) => {
        this.hobbies = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load hobbies', err)
    });
  }

  addHobby(): void {
    this.hobbyService.addHobby(this.newHobby).subscribe({
      next: () => {
        this.newHobby = { name: '' };
        this.loadHobbies();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add hobby', err)
    });
  }


  deleteHobby(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this hobby?')) return;

    this.hobbyService.deleteHobby(id).subscribe({
      next: () => {
        this.loadHobbies();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete hobby:', err)
    });
  }

   loadLanguages(): void {
    this.languageService.getAllLanguages().subscribe({
      next: (data) => {
        this.languages = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load languages', err)
    });
  }


   addLanguage(): void {
    this.languageService.addLanguage(this.newLanguage).subscribe({
      next: () => {
        this.newLanguage = { name: '', proficiency: '' };
        this.loadLanguages();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add language', err)
    });
  }

   deleteLanguage(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this language?')) return;

    this.languageService.deleteLanguage(id).subscribe({
      next: () => {
        this.loadLanguages();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete language:', err)
    });
  }

  loadReferences(): void {
    this.referenceService.getAllReferences().subscribe({
      next: (data) => {
        this.references = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load references', err)
    });
  }

  addReference(): void {
    this.referenceService.addReference(this.newReference).subscribe({
      next: () => {
        this.newReference = { name: '', contact: '', relation: '' };
        this.loadReferences();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add reference', err)
    });
  }

  deleteReference(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this reference?')) return;

    this.referenceService.deleteReference(id).subscribe({
      next: () => {
        this.loadReferences();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete reference:', err)
    });
  }


  // loadTrainings(): void {
  //   this.trainingService.getAllTrainings().subscribe({
  //     next: (data) => {
  //       this.trainings = data;
  //       this.cdr.markForCheck();
  //     },
  //     error: (err) => console.error('Failed to load trainings', err)
  //   });
  // }


  // addTraining(): void {
  //   this.trainingService.addTraining(this.newTraining).subscribe({
  //     next: () => {
  //       this.newTraining = { title: '', institute: '', duration: '', description: '' };
  //       this.loadTrainings();
  //       this.cdr.markForCheck();
  //     },
  //     error: (err) => console.error('Failed to add training', err)
  //   });
  // }

  // deleteTraining(id: number | undefined): void {
  //   if (!id) return;
  //   if (!confirm('Are you sure you want to delete this training?')) return;

  //   this.trainingService.deleteTraining(id).subscribe({
  //     next: () => {
  //       this.loadTrainings();
  //       this.cdr.markForCheck();
  //     },
  //     error: (err) => console.error('Failed to delete training:', err)
  //   });
  // }


  loadSkills(): void {
    this.skillService.getAllSkills().subscribe({
      next: (data) => {
        this.skills = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load skills', err)
    });
  }

   // Add a new skill
  addSkill(): void {
    this.skillService.addSkill(this.newSkill).subscribe({
      next: () => {
        this.newSkill = { name: '', level: '' }; // Reset form
        this.loadSkills();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add skill', err)
    });
  }


   // Delete a skill by ID
  deleteSkill(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this skill?')) return;

    this.skillService.deleteSkill(id).subscribe({
      next: () => {
        this.loadSkills();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete skill:', err)
    });
  }


  //  // ✅ Load extracurriculars
  // loadExtracurriculars(): void {
  //   this.extracurricularService.getAllExtracurriculars().subscribe({
  //     next: (data) => {
  //       this.extracurriculars = data;
  //       this.cdr.markForCheck();
  //     },
  //     error: (err) => console.error('Failed to load extracurriculars', err)
  //   });
  // }


  // // ✅ Add extracurricular
  // addExtracurricular(): void {
  //   this.extracurricularService.addExtracurricular(this.newExtracurricular).subscribe({
  //     next: () => {
  //       this.newExtracurricular = { title: '', role: '', description: '' };
  //       this.loadExtracurriculars();
  //       this.cdr.markForCheck();
  //     },
  //     error: (err) => console.error('Failed to add extracurricular', err)
  //   });
  // }

  // // ✅ Delete extracurricular
  // deleteExtracurricular(id: number | undefined): void {
  //   if (!id) return;
  //   if (!confirm('Are you sure you want to delete this extracurricular?')) return;

  //   this.extracurricularService.deleteExtracurricular(id).subscribe({
  //     next: () => {
  //       this.loadExtracurriculars();
  //       this.cdr.markForCheck();
  //     },
  //     error: (err) => console.error('Failed to delete extracurricular:', err)
  //   });
  // }

   loadEducations(): void {
    this.educationService.getEducations().subscribe({
      next: (data) => {
        this.educations = data;

        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load educations', err);
      }
    });
  }

   getProfile() {

    this.caregiverService.getProfile().subscribe({
      next: (data) => {
        this.caregiver = data;
        console.log(data);
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load profile', err);
      }
    });
  }

 addEducation(): void {
    this.educationService.addEducation(this.newEducation).subscribe({
      next: async (addedEdu: any) => {
        if (!this.caregiver.educations) {
          this.caregiver.educations = [];
        }
        this.caregiver.educations.push(addedEdu);
        this.newEducation = { level: '', institute: '', result: '', year: '' };


      },
      error: (err) => {
        console.error('Failed to add education', err);
      }
    });
  }


  deleteEducation(id: number): void {
    if (!confirm('Are you sure you want to delete this education?')) {
      return;
    }

    this.educationService.deleteEducation(id).subscribe({
      next: () => {
        // ✅ Remove from UI
        this.loadEducations();
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to delete education:', err);
        alert('Failed to delete education.');
      }
    });
  }


  loadExperiences(): void {
    this.expService.getAllExperiences().subscribe(data => {
      this.experiences = data;
      this.cdr.markForCheck();
    });
  }

   addExperience(): void {
    this.expService.addExperience(this.newExperience).subscribe(() => {
      this.newExperience = { company: '', position: '', fromDate: '' };
      this.loadExperiences();
      this.cdr.markForCheck();
    });
  }

  deleteExperience(id: number | undefined): void {
    if (!id) return;
    this.expService.deleteExperience(id).subscribe(() => {
      this.loadExperiences();
      this.cdr.markForCheck();
    });
  }

  convertImgToBase64(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous'); // avoid CORS issues
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };
      img.onerror = error => reject(error);
      img.src = url;
    });
  }

  async generateCV() {
    const doc = new jsPDF('p', 'pt', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const leftColWidth = pageWidth * 0.33;
    const rightColWidth = pageWidth - leftColWidth - 40; // 40 for margin
    const margin = 20;
    let yLeft = margin;
    let yRight = margin;

    // Background for left column
    doc.setFillColor(48, 63, 79);  // dark blue-gray
    doc.rect(0, 0, leftColWidth, pageHeight, 'F');

    // Add profile photo circle with white border
    const imageUrl = `http://localhost:8085/images/caregiver/${this.caregiver.photo}`;
    let imgData = '';
    try {
      imgData = await this.convertImgToBase64(imageUrl);
    } catch (e) {
      console.warn('Could not load image for PDF:', e);
    }
    if (imgData) {
      const imgSize = 100;
      // White circle behind photo
      doc.setDrawColor(255, 255, 255);
      doc.setFillColor(255, 255, 255);
      doc.circle(leftColWidth / 2, yLeft + imgSize / 2, imgSize / 2 + 4, 'FD');
      // Add photo on top
      doc.addImage(imgData, 'PNG', (leftColWidth - imgSize) / 2, yLeft, imgSize, imgSize, undefined, 'FAST');
    }
    yLeft += 130;

    // Name and title in left column
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text(this.caregiver.name.toUpperCase(), margin, yLeft);
    yLeft += 25;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(this.caregiver.profession || 'Your Profession', margin, yLeft);
    yLeft += 30;

    // Personal info list in left column
    doc.setFontSize(10);
    const personalInfo = [
      { icon: '👤', text: this.caregiver.gender || 'Gender' },
      { icon: '🎂', text: this.caregiver.dob || 'DOB' },
      { icon: '📞', text: this.caregiver.phone || 'Phone' },
      { icon: '✉️', text: this.caregiver.email || 'Email' },
      { icon: '🌍', text: this.caregiver.website || 'Website' },
      { icon: '📍', text: this.caregiver.address || 'Address' },
    ];
    personalInfo.forEach(info => {
      doc.text(`${info.icon}  ${info.text}`, margin, yLeft);
      yLeft += 15;
    });

    // Draw separator line on left column
    doc.setDrawColor(255, 255, 255);
    doc.line(margin, yLeft, leftColWidth - margin, yLeft);
    yLeft += 20;

    // Skills title in left column
    doc.setFont('helvetica', 'bold');
    doc.text('SKILLS', margin, yLeft);
    yLeft += 20;

    // List skills
    this.skills.forEach(skill => {
      doc.setFont('helvetica', 'bold');
      doc.text(`• ${skill.name}`, margin, yLeft);
      yLeft += 12;
      doc.setFont('helvetica', 'normal');
      doc.text(`- ${skill.level}`, margin + 12, yLeft);
      yLeft += 18;
    });

    // Repeat similar blocks for Honors, Certifications, Interests on left column...
    // Increase yLeft accordingly

    // --- Right column content ---
    yRight = margin;

    // Title: Objective
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('OBJECTIVE', leftColWidth + margin, yRight);
    yRight += 20;
    doc.setLineWidth(0.5);
    doc.line(leftColWidth + margin, yRight, pageWidth - margin, yRight);
    yRight += 10;

    // Objective text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const objText = this.caregiver.objective || "Your objective text here...";
    const objLines = doc.splitTextToSize(objText, rightColWidth);
    doc.text(objLines, leftColWidth + margin, yRight);
    yRight += objLines.length * 14 + 20;

    // Education
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('EDUCATION', leftColWidth + margin, yRight);
    yRight += 20;
    doc.line(leftColWidth + margin, yRight, pageWidth - margin, yRight);
    yRight += 10;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    this.educations.forEach(edu => {
      const eduTitle = `• ${edu.institute} (${edu.level})`;
      doc.text(eduTitle, leftColWidth + margin, yRight);
      yRight += 14;
      const eduDetails = ` GPA: ${edu.result || 'N/A'}  Year: ${edu.year || 'N/A'}`;
      doc.text(eduDetails, leftColWidth + margin + 10, yRight);
      yRight += 20;
    });

    // Similarly add Work Experience, Activities with bullets and indentation in right column

    // Finally save the doc
    doc.save(`${this.caregiver.name}_Styled_CV.pdf`);
  }


}
