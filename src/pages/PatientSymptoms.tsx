import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const DISEASE_CATEGORIES = {
  "Infectious Diseases": ["Viral Infections", "Bacterial Infections", "Fungal Infections", "Parasitic Infections"],
  "Chronic Diseases": ["Diabetes", "Hypertension", "Asthma", "Chronic Obstructive Pulmonary Disease (COPD)"],
  "Cardiovascular Diseases": ["Heart Attack", "Stroke", "Arrhythmias", "Heart Failure"],
  "Neurological Diseases": ["Migraine", "Parkinson's Disease", "Epilepsy", "Multiple Sclerosis"],
  "Gastrointestinal Diseases": ["Gastritis", "Irritable Bowel Syndrome (IBS)", "Hepatitis", "Peptic Ulcer Disease"],
  "Autoimmune Diseases": ["Rheumatoid Arthritis", "Lupus", "Multiple Sclerosis", "Celiac Disease"],
  "Cancers": ["Lung Cancer", "Breast Cancer", "Colon Cancer", "Prostate Cancer"],
  "Mental Health Disorders": ["Depression", "Anxiety Disorders", "Schizophrenia", "Bipolar Disorder"],
  "Endocrine Disorders": ["Hypothyroidism", "Hyperthyroidism", "Cushing's Syndrome", "Addison's Disease"],
  "Skin Diseases": ["Psoriasis", "Eczema", "Acne", "Rosacea"],
  "Rare Diseases": ["Cystic Fibrosis", "Amyotrophic Lateral Sclerosis (ALS)", "Huntington's Disease", "Marfan Syndrome"],
  "Musculoskeletal Disorders": ["Osteoporosis", "Osteoarthritis", "Fibromyalgia", "Gout"],
  "Genetic Disorders": ["Down Syndrome", "Sickle Cell Anemia", "Thalassemia", "Hemophilia"],
  "Eye Diseases": ["Cataracts", "Glaucoma", "Macular Degeneration", "Diabetic Retinopathy"],
  "Ear, Nose, and Throat Disorders": ["Sinusitis", "Otitis Media", "Tinnitus", "Meniere's Disease"],
  "Pediatric Diseases": ["Measles", "Mumps", "Chickenpox", "Kawasaki Disease"],
  "Geriatric Diseases": ["Alzheimer's Disease", "Osteoporosis", "Age-Related Macular Degeneration", "Dementia"],
  "Reproductive System Diseases": ["Polycystic Ovary Syndrome (PCOS)", "Endometriosis", "Erectile Dysfunction", "Prostatitis"],
  "Blood Disorders": ["Anemia", "Leukemia", "Lymphoma", "Hemophilia"],
  "Respiratory Diseases": ["Pneumonia", "Tuberculosis", "Chronic Bronchitis", "Pulmonary Fibrosis"]
};

const PatientSymptoms = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSymptom, setSelectedSymptom] = useState<string>("");

  const handleNext = () => {
    if (selectedSymptom) {
      navigate("/patient/risks");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Symptoms</h1>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Disease Category</Label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(DISEASE_CATEGORIES).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedCategory && (
            <div className="space-y-2">
              <Label htmlFor="symptom">Specific Symptom</Label>
              <Select
                value={selectedSymptom}
                onValueChange={setSelectedSymptom}
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select a symptom" />
                </SelectTrigger>
                <SelectContent>
                  {DISEASE_CATEGORIES[selectedCategory as keyof typeof DISEASE_CATEGORIES].map((symptom) => (
                    <SelectItem key={symptom} value={symptom}>
                      {symptom}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button 
              onClick={handleNext}
              disabled={!selectedSymptom}
            >
              Analyze
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PatientSymptoms;