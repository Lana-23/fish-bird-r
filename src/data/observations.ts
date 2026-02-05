export interface Observation {
  id: string;
  speciesId: string;
  date: string; // ISO date string
  location?: string;
  notes?: string;
  createdAt: string; // ISO date string
}

class ObservationManager {
  private storageKey = 'fish_bird_observations';

  private getObservationsFromStorage(): Observation[] {
    const stored = localStorage.getItem(this.storageKey);
    if (!stored) return [];
    
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }

  private saveObservations(observations: Observation[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(observations));
  }

  getObservations(): Observation[] {
    return this.getObservationsFromStorage().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  addObservation(speciesId: string, date: string, location?: string, notes?: string): void {
    const newObservation: Observation = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      speciesId,
      date,
      location,
      notes,
      createdAt: new Date().toISOString()
    };

    const observations = this.getObservations();
    observations.push(newObservation);
    this.saveObservations(observations);
  }

  deleteObservation(id: string): void {
    const observations = this.getObservations().filter(obs => obs.id !== id);
    this.saveObservations(observations);
  }

  getObservationsBySpecies(speciesId: string): Observation[] {
    return this.getObservations().filter(obs => obs.speciesId === speciesId);
  }

  getObservationsByDateRange(startDate: string, endDate: string): Observation[] {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return this.getObservations().filter(obs => {
      const obsDate = new Date(obs.date);
      return obsDate >= start && obsDate <= end;
    });
  }

  getStatistics() {
    const observations = this.getObservations();
    
    // Count by species
    const speciesCount: Record<string, number> = {};
    observations.forEach(obs => {
      speciesCount[obs.speciesId] = (speciesCount[obs.speciesId] || 0) + 1;
    });

    // Count by month
    const monthlyCount: Record<string, number> = {};
    observations.forEach(obs => {
      const date = new Date(obs.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      monthlyCount[monthKey] = (monthlyCount[monthKey] || 0) + 1;
    });

    // Count by type (fish/bird)
    const typeCount: Record<string, number> = { fish: 0, bird: 0 };
    // This would need to be enhanced to map speciesId to type
    // For now, we'll just count total

    return {
      total: observations.length,
      speciesCount,
      monthlyCount,
      typeCount
    };
  }

  clearAllObservations(): void {
    localStorage.removeItem(this.storageKey);
  }
}

export const observationManager = new ObservationManager();