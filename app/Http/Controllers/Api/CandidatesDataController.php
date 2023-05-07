<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Candidate;

class CandidatesDataController extends Controller
{
    public function getCandidates() {
        try {
            $candidates = Candidate::with(['jobs', 'applications'])->get();
    
            return response()->json([
                'code' => 200,
                'status' => 'success',
                'total' => $candidates->count(),
                'data' => $candidates
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function getCandidate($id) {
        try {
            $candidate = Candidate::with('jobs', 'applications')->find($id);
    
            return response()->json([
                'code' => 200,
                'status' => 'success',
                'data' => $candidate
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }    
}
